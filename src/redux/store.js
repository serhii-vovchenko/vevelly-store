import { configureStore } from '@reduxjs/toolkit';
import { bestsellersReducer } from './bestsellers/slice';
import { homeReducer } from './home/slice';
import { newProductsReducer } from './newProducts/slice';
import { orderReducer } from './order/slice';
import { productsReducer } from './products/slice';
import { productCardReducer } from './productCard/slice';

export const store = configureStore({
	reducer: {
		bestsellers: bestsellersReducer,
		home: homeReducer,
		newProducts: newProductsReducer,
		order: orderReducer,
		products: productsReducer,
		productCard: productCardReducer,
	},
});
