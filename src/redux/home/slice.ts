import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
	home: [],
	loading: false,
	error: null,
};

const homeSlice = createSlice({
	name: 'home',
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

export const homeReducer = homeSlice.reducer;
