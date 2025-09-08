import Image from 'next/image';
import React from 'react';

type LogoProps = {
	width?: number;
	height?: number;
};

const Logo: React.FC<LogoProps> = ({ width = 40, height = 40 }) => {
	return <Image src={'/logo.png'} width={width} height={height} alt='Logo' />;
};

export default Logo;
