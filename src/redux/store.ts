import { configureStore } from '@reduxjs/toolkit';
import { bestsellersReducer } from './bestsellers/slice';
import { homeReducer } from './home/slice';
import { languageReducer } from './language/slice';
import { newProductsReducer } from './newProducts/slice';
import { orderReducer } from './order/slice';
import { productReducer } from './product/slice';
import { productsReducer } from './products/slice';
import { searchReducer } from './search/slice';

export const store = configureStore({
	reducer: {
		bestsellers: bestsellersReducer,
		home: homeReducer,
		newProducts: newProductsReducer,
		order: orderReducer,
		products: productsReducer,
		product: productReducer,
		language: languageReducer,
		search: searchReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
