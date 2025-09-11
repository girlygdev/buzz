'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
	const searchParams = useSearchParams();
	const message = searchParams.get('message') ?? 'An unexpected error has occurred.';
	
	return (
		<div className='flex items-center justify-center w-full h-screen text-sm'>
			<p>{message}</p>
		</div>
	);
}
