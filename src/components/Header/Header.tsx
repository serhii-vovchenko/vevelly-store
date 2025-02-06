import { Container } from '../Container/Container';
import Icon from '../Icon';
import s from './Header.module.css';
import { Topline } from './Topline';

const Header = () => {
	return (
		<header>
			<Topline />
			<Container>
				<div className={s.header__wrap}>
					<div className={s.header__menu}>
						<Icon name="menu" />
						Catalog
					</div>
					<div className={s.header__logo}>VEVELLY</div>
					<div className={s.header__buttons}>
						<div className={s.header__search}>
							<Icon name="search" />
						</div>
						<div className={s.header__favorites}>
							<Icon name="like" />
						</div>
						<div className={s.header__cart}>
							<Icon name="basket" color="none" />
						</div>
						<div className={s.header__profile}>
							<Icon name="person" color="none" />
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
