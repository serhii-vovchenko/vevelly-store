import clsx from 'clsx';
import { useSearchStore } from '../../redux/search/useSearchStore';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import { Search } from './Search';
import { Topline } from './Topline';

const Header = () => {
	const { isSearchVisible, toggleSearchVisibility } = useSearchStore();
	return (
		<header>
			<Topline />
			<Container>
				<div className="flex items-center justify-between py-10">
					<div className="flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c]">
						<Icon name="menu" />
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
		</header>
	);
};

export default Header;
