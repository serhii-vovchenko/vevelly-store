import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';

const BestsellersPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>BestsellersPage</h1>
		</Layout>
	);
};

export default BestsellersPage;
