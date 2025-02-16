import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';
import ProductGallery from '../components/ProductCard/ProductGallery';
import { Container } from '../components/Container/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductInfo from '../components/ProductCard/ProductInfo';

const product = {
	id: 12211,
	path: 'golden-pearl',
	img: '/watch1.png',
	title: 'Golden Pearl',
	desc: 'White gold ring with a pearl.',
	sku: 560278,
	material: ['Gold', 'Silver', 'Platinum'],
	size: {
		15: true,
		15.5: true,
		16: true,
		16.5: false,
		17: true,
		17.5: false,
		18: true,
		18.5: false,
		19: false,
	},
	price: 450,
	old_price: 550,
};

const ProductCardPage = () => {
	return (
		<Layout>
			<Container>
				<Breadcrumbs className="mb-11" />
				<div className="flex gap-10 mb-[120px] ">
					<ProductGallery />
					<ProductInfo product={product} />
				</div>
				<div className=" mb-[120px] bg-gray-50 h-40"></div>
				<div className="mb-[150px] bg-gray-50 h-40"></div>
			</Container>
		</Layout>
	);
};

export default ProductCardPage;
