import s from './NewProductsPage.module.css';
import Layout from '../../components/Layout/Layout';

import { NavLink } from 'react-router-dom';

const NewProductsPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>NewProductsPage</h1>
		</Layout>
	);
};

export default NewProductsPage;
