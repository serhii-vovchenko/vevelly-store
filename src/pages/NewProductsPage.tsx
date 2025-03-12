import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';
import api from '../api/axios';
import { Endpoints } from '../api/endpoints';

const NewProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			try {
				const response = await api.get(Endpoints.PRODUCTS);
				setProducts(response.data);
				console.log(response.data);
			} catch (err) {
				setError('Не удалось загрузить товары');
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>{error}</div>;

	return (
		<Layout>
			<NavLink to="/">Back to home page</NavLink>
			<h1>NewProductsPage</h1>
			{/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul> */}
		</Layout>
	);
};

export default NewProductsPage;
