import clsx from 'clsx';
import React from 'react';
import { useSearchStore } from '../../redux/search/useSearchStore';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import { Menu } from '../Menu/Menu';
import { Search } from './Search';
import { Topline } from './Topline';

const Header = () => {
	const { isSearchVisible, toggleSearchVisibility } = useSearchStore();
	const [isShowMenu, setIsShowMenu] = React.useState(false);
	const toggleMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	return (
		<header className="relative">
			<Topline />
			<Container>
				<div className="flex items-center justify-between py-10">
					<div className="flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c]">
						<span onClick={toggleMenu}>
							<Icon name="menu" />
						</span>
						Catalog
					</div>
					<div
						className={clsx(
							'header__logo',
							'flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c]'
						)}
					>
						VEVELLY
					</div>
					<div className="flex items-center justify-between gap-5">
						<div className="flex items-center relative">
							{isSearchVisible && <Search />}
							<span className="leading-2.5" onClick={toggleSearchVisibility}>
								<Icon name="search" className="ml-2.5" />
							</span>
						</div>
						<Icon name="like" badge={1} />
						<Icon name="basket" color="none" badge={5} />
						<Icon name="person" color="none" />
					</div>
				</div>
			</Container>
			{isShowMenu && (
				<>
					<div className="fixed inset-0 bg-black/10 z-40" onClick={toggleMenu}></div>

					<Container className="absolute top-full left-0 right-0 z-50">
						<div className="w-full flex justify-between bg-white border border-[#D6E8EE]">
							<Menu />
							<div className="w-64 p-5">
								<img className="h-40" src="/photo-menu.png" alt="menu-promo" />
								<div className="border-l-[1px]  border-[#018ABE]">
									<div className="h-[34px] text-lg pt-2.5 leading-6 text-[#0d0c0c] relative before:content-[''] before:absolute before:-left-[1px] before:top-8.5 before:w-20 before:h-[1px] before:bg-[#018ABE]">
										<div className="absolute top-5 right-0">Знижки до 25%</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</>
			)}
		</header>
	);
};

export default Header;
