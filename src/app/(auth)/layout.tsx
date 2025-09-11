import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='w-full h-screen overflow-hidden flex'>
			<div className='w-[40%] p-5 '>
				<div className='w-full h-full relative'>
					<Image
						src='/welcome-illustration.png'
						alt='Welcome to Verve POS'
						fill 
						style={{ objectFit: 'cover' }}
						className='rounded-lg'
					/>
				</div>
			</div>
			<div className='flex-1'>{children}</div>
		</div>
	);
}
