import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
	bestsellers: [],
	loading: false,
	error: null,
};

const bestsellersSlice = createSlice({
	name: 'bestsellers',
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

export const bestsellersReducer = bestsellersSlice.reducer;
