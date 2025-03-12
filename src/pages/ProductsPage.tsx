import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';

const ProductsPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>ProductsPage</h1>
		</Layout>
	);
};

export default ProductsPage;
