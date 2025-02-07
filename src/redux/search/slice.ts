import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
type SearchState = {
	query: string;
	isSearchVisible: boolean;
};

const initialState: SearchState = {
	query: '',
	isSearchVisible: false,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
		toggleSearch: state => {
			state.isSearchVisible = !state.isSearchVisible;
		},
	},
});
export const { setQuery, toggleSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectIsSearchVisible = (state: RootState) => state.search.isSearchVisible;
