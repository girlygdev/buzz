import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const SignoutButton = async () => {
	const supabase = await createClient();

	async function handleSignOut() {
		await supabase.auth.signOut();
		redirect('/login'); // or wherever you want to send them
	}

	return (
		<button
			onClick={handleSignOut}
			className='bg-primary/80 w-full py-2 rounded-sm hover:bg-primary cursor-pointer'
		>
			Sign Out
		</button>
	);
};

export default SignoutButton;
