import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getProductByIdThunk } from './operations';
import { Product, ErrorResponse, ProductState } from './types';
import { number } from 'zod';

const initialState: ProductState = {
	product: null,
	loading: false,
	error: null,
	currentSize: 0,
	currentMetalColor: 0,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		handleCurrentSize: (state, action) => {
			state.currentSize = action.payload;
		},

		handleCurrentMetalColor: (state, action) => {
			state.currentMetalColor = action.payload;
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getProductByIdThunk.fulfilled, (state, action: PayloadAction<Product>) => {
				state.product = action.payload;
			})

			.addMatcher(isAnyOf(getProductByIdThunk.pending), state => {
				state.loading = true;
				state.error = null;
			})

			.addMatcher(isAnyOf(getProductByIdThunk.rejected), (state, action) => {
				state.loading = false;
				if (action.payload) {
					state.error = (action.payload as ErrorResponse).message;
				} else {
					state.error = 'Unknown error';
				}
			});
	},
});

export const { handleCurrentSize, handleCurrentMetalColor } = productSlice.actions;
export const productReducer = productSlice.reducer;
