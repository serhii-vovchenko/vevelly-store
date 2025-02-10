import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { selectIsSearchVisible, selectSearchQuery, setQuery, toggleSearch } from './slice';

export const useSearchStore = () => {
	const dispatch = useDispatch<AppDispatch>();
	const query = useSelector((state: RootState) => selectSearchQuery(state));
	const isSearchVisible = useSelector((state: RootState) => selectIsSearchVisible(state));
	const updateQuery = (newQuery: string) => {
		dispatch(setQuery(newQuery));
	};
	const toggleSearchVisibility = () => dispatch(toggleSearch());
	return { query, isSearchVisible, updateQuery, toggleSearchVisibility };
};
