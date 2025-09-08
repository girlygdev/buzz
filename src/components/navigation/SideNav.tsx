'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import NavItem from './NavItem';
import { LinkNav, SideNavLinks } from './SideNavLinks';

const SideNav = () => {
	const path = usePathname();

	return (
		<div className='flex flex-col flex-1'>
			<nav className='flex-grow flex flex-col justify-between'>
				<ul className='flex flex-col flex-grow space-y-2'>
					{SideNavLinks.map((item: LinkNav) => (
						<NavItem key={item.href} item={item} path={path} />
					))}
				</ul>

				<div className='py-5'>
					<form>
						<button className='bg-primary/80 w-full py-2 rounded-sm hover:bg-primary cursor-pointer'>
							Sign Out
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default SideNav;
