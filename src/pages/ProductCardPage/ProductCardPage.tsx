import Layout from '../../components/Layout/Layout';
import s from './ProductCardPage.module.css';

import { NavLink } from 'react-router-dom';

const ProductCardPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>ProductCardPage</h1>
		</Layout>
	);
};

export default ProductCardPage;
