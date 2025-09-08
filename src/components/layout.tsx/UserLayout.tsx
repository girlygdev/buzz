'use client';

import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SideNav from '../navigation/SideNav';
import Logo from '../navigation/Logo';
import LogoFull from '../navigation/LogoFull';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
  const path = usePathname();

	useEffect(() => setOpen(false), [path]);

	return (
		<div className='flex h-screen md:overflow-hidden'>
			{/* Minimized side bar) */}
			<header className="flex flex-col justify-start items-center gap-2 p-2 border-r border-neutral-800 lg:hidden">
				<Logo />
				<button
					type='button'
					aria-label='Open navigation'
					onClick={() => setOpen(true)}
					className='cursor-pointer hover:text-primary'>
					<Menu size={24} />
				</button>
			</header>

			{/* Static sidebar (lg+) */}
			<aside className="hidden lg:flex flex-col w-64 flex-none border-r border-neutral-800 p-5">
				<LogoFull className='mb-2'/>
				<SideNav />
			</aside>

			{/* Drawer backdrop (md and below) */}
			<div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel (md and below) */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 transform transition-transform lg:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="h-full relative flex flex-col p-5 bg-neutral-900 text-white border-r border-neutral-800">
          <button
						type="button"
						aria-label="Close navigation"
						onClick={() => setOpen(false)}
						className="cursor-pointer text-neutral-700 hover:text-neutral-500 absolute top-2 right-2"
					>
						<X size={18} />
					</button>

					<LogoFull className='mb-2'/>

          <SideNav />
        </div>
      </aside>

			{/* Content */}
      <main className="flex-1 p-3 md:overflow-y-auto">{children}</main>
		</div>
	)
}

export default UserLayout