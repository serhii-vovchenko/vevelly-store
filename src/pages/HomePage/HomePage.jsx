import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
	return (
		<ul className={s.wrapper}>
			<li>
				<NavLink to="/bestsellers">Bestsellers</NavLink>
			</li>
			<li>
				<NavLink to="/new-products">New Product</NavLink>
			</li>
			<li>
				<NavLink to="/products">Products</NavLink>
			</li>
			<li>
				<NavLink to="/products/product">Product Card</NavLink>
			</li>
			<li>
				<NavLink to="/order">Order</NavLink>
			</li>
		</ul>
	);
};

export default HomePage;
