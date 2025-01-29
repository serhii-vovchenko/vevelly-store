import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import NewProductsPage from '../pages/NewProductsPage/NewProductsPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import BestsellersPage from '../pages/BestsellersPage/BestsellersPage';
import ProductCardPage from '../pages/ProductCardPage/ProductCardPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/bestsellers',
			element: <BestsellersPage />,
		},
		{
			path: '/new-products',
			element: <NewProductsPage />,
		},
		{
			path: '/products',
			element: <ProductsPage />,
			children: [
				{
					path: '*',
					element: <ProductCardPage />,
				},
			],
		},
		{
			path: '/order',
			element: <OrderPage />,
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
	],
	{
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		},
	}
);

export default router;
