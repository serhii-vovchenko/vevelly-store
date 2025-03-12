import { AppDispatch } from '../store';
import { setLanguage } from './slice';

export const changeLanguage = (lang: 'ua' | 'en') => {
	return (dispatch: AppDispatch) => {
		dispatch(setLanguage(lang));
		localStorage.setItem('language', lang);
	};
};
