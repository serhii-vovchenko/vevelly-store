import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import { Endpoints } from '../../api/endpoints';
import { MenuItem } from './MenuItem';

interface Props {
	className?: string;
}
interface MenuItemProps {
	slug: string;
	name: string;
	icon?: string;
	subcategories?: MenuItemProps[];
}

export const Menu: React.FC<Props> = ({ className }) => {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<number | null>(null);
	const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const toggleSubmenu = (index: number) => {
		setIsOpenSubmenu(isOpenSubmenu === index ? null : index);
	};

	const fetchMenu = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await api.get(Endpoints.CATEGORIES);
			setMenuItems(response.data);
		} catch (err) {
			console.error('Не удалось загрузить меню', err);
			setError('Ошибка загрузки меню');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMenu();
	}, []);

	return (
		<>
			<div
				className={clsx(
					'w-60 h-auto flex flex-col gap-2.5 p-5 border-r-[1px] border-[#D6E8EE]',
					className
				)}
			>
				{error && <p className="text-red-500">{error}</p>}
				{!isLoading && !error && (
					<ul className="menu relative ">
						{menuItems?.map((item, index) => (
							<li
								key={index}
								className="w-full text-lg leading-6 text-[#0d0c0c]  border-b-[1px] border-transparent hover:border-[#D6E8EE] group"
							>
								<a href={item.slug} className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										{item.icon && <img src={item.icon} alt="icon" />}
										<span>{item.name}</span>
									</div>
									{item.subcategories && item.subcategories.length > 0 && (
										<img
											src="/arrow.svg"
											alt="arrow"
											className="cursor-pointer"
											onClick={e => {
												e.preventDefault();
												toggleSubmenu(index);
											}}
										/>
									)}
								</a>

								{item.subcategories && isOpenSubmenu === index && (
									<MenuItem menu={item.subcategories} depth={1} />
								)}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
