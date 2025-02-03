import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<h1>NotFoundPage</h1>
		</>
	);
};

export default NotFoundPage;
