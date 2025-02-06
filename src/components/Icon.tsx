import React from 'react';

type IconProps = {
	name: string;
	width?: number;
	height?: number;
	color?: string;
};

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, color = 'black' }) => (
	<svg width={width} height={height} fill={color}>
		<use href={`/icons.svg#${name}`} />
	</svg>
);

export default Icon;
