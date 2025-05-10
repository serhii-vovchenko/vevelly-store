import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Endpoints } from '../api/endpoints';
import { Product } from '../redux/product/types';
import { CartItemType } from './CardSlider'

// Перечень возможных статусов
const STATUSES = ['Новинка', 'Акція', 'Хіт продажів', 'Лімітована колекція'] as const;
type Status = (typeof STATUSES)[number];

interface ProductStatusSortProps {
	status: Status;
}

const ProductStatusSort = ({ status }: ProductStatusSortProps): CartItemType[] => {
	const [products, setProducts] = useState<CartItemType[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get(Endpoints.PRODUCTS);
				const filteredProducts = response.data.results.filter((product: Product) =>
					product.statuses.some((s: string) => s === status)
				);
				setProducts(filteredProducts);
			} catch (err) {
				console.error('Не удалось загрузить товары', err);
			}
		};

		fetchProducts();
	}, [status]);

	return products;
};

export default ProductStatusSort;
