import { montserrat } from '@/styles/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type LogoFullProps = {
	width?: number;
	height?: number;
	className?: string;
};

const LogoFull: React.FC<LogoFullProps> = ({ width = 40, height = 40, className }) => {
	return (
		<div className={clsx('flex items-center justify-center', className)}>
			<Image src={'/logo.png'} width={width} height={height} alt='Verve Logo' />
			<span className={`${montserrat.className} text-primary antialiased font-semibold tracking-widest text-2xl ml-1`}>erve POS</span>
		</div>
	)
};

export default LogoFull;
