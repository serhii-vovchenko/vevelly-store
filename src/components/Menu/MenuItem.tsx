import clsx from 'clsx';
import React from 'react';

interface MenuItem {
	link: string;
	title: string;
	submenu?: MenuItem[];
}

interface Props {
	menu: MenuItem[];
	depth?: number;
}
export const MenuItem: React.FC<Props> = ({ menu, depth = 0 }) => {
	return (
		<ul
			className={clsx('absolute left-full bg-white w-60 shadow-md hidden group-hover:block', {
				relative: depth === 0,
			})}
			style={{ top: depth > 1 ? '0px' : '-20px' }}
		>
			{menu.map((item, index) => (
				<li key={index} className="relative px-4 py-2 hover:bg-gray-100 group">
					<a href={item.link} className="flex justify-between items-center">
						{item.title}
						{item.submenu && <img src="/arrow.svg" alt="arrow" />}
					</a>

					{item.submenu && <MenuItem menu={item.submenu} depth={depth + 1} />}
				</li>
			))}
		</ul>
	);
};
