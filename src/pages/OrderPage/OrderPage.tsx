import s from './OrderPage.module.css';
import Layout from '../../components/Layout/Layout';

import { NavLink } from 'react-router-dom';

const OrderPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>OrderPage</h1>
		</Layout>
	);
};

export default OrderPage;
