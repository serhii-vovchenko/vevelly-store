import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';
import ProductStatusSort from '../components/ProductStatusSort';

const NewProductsPage = () => {
	const cards = ProductStatusSort({ status: 'Новинка' });
	console.log(cards);
	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>NewProductsPage</h1>
			{
				<ul>
					{cards.map(product => (
						<li key={product.id}>
							{product.name} - ${product.subproducts[0]?.price}
						</li>
					))}
				</ul>
			}
		</Layout>
	);
};

export default NewProductsPage;
