import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
	newProducts: [],
	loading: false,
	error: null,
};

const newProductsSlice = createSlice({
	name: 'newProducts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder;
		// .addCase(_, (state, action) => {})

		// .addMatcher(isAnyOf(_.pending), state => {
		// 	state.loading = true;
		// 	state.error = null;
		// })
		// .addMatcher(isAnyOf(_.rejected), (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.payload;
		// });
	},
});

export const newProductsReducer = newProductsSlice.reducer;
