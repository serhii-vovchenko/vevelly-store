import Layout from '../components/Layout/Layout';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>NotFoundPage</h1>
		</Layout>
	);
};

export default NotFoundPage;
