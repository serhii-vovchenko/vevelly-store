import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: 'products',
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

export const productsReducer = productsSlice.reducer;
