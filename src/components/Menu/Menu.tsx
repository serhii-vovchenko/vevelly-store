import clsx from 'clsx';
import React from 'react';
import { MenuItem } from './MenuItem';

interface Props {
	className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
	const menu = [
		{
			icon: '/1.png',
			title: 'Каблучки',
			link: '#/',
			submenu: [
				{
					title: 'Обручки',
					link: '#/',
					submenu: [
						{
							title: 'Для молодих',
							link: '#/',
						},
					],
				},
				{
					title: 'Для заручин',
					link: '#/',
				},
				{
					title: 'Фалангові',
					link: '#/',
				},
				{
					title: 'Печатки/перстні',
					link: '#/',
				},
				{
					title: 'Широкі',
					link: '#/',
				},
				{
					title: 'Тонкі',
					link: '#/',
				},
				{
					title: 'Єксклюзивні',
					link: '#/',
				},
				{
					title: 'Sale',
					link: '#/',
				},
				{
					title: 'Всі каблучки',
					link: '#/',
				},
			],
		},
		{
			icon: '/1.png',
			title: 'Сережки',
			link: '#/',
		},
		{
			icon: '/1.png',
			title: 'Для заручин',
			link: '#/',
		},
		{
			icon: '/1.png',
			title: 'Браслети',
			link: '#/',
		},
		{
			icon: '/1.png',
			title: 'Ланцюжки',
			link: '#/',
		},
		{
			icon: '/1.png',
			title: 'Кольє',
			link: '#/',
		},
	];
	return (
		<div
			className={clsx(
				'w-[340px] flex flex-col gap-2.5 py-5 pl-5 border-r-[1px] border-[#D6E8EE] h-full ',
				className
			)}
		>
			<ul className="menu relative ">
				{menu.map((item, index) => (
					<li key={index} className="w-full text-lg leading-6 text-[#0d0c0c] group">
						<a href={item.link} className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								{item.icon && <img src={item.icon} alt="icon" />}
								<span>{item.title}</span>
							</div>
							{item.submenu && <img src="/arrow.svg" alt="arrow" />}
						</a>

						{item.submenu && <MenuItem menu={item.submenu} depth={1} />}
					</li>
				))}
			</ul>
		</div>
	);
};
