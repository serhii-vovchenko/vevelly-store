import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/language/operations';
import { selectLanguage } from '../../redux/language/selectors';
import s from './LanguageSwither.module.css';

const LanguageSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);

	const handleChangeLanguage = (lang: 'ua' | 'en') => {
		dispatch(changeLanguage(lang));
	};

	return (
		<div className={s.langswitch}>
			<button
				className={clsx(s.lang_btn, language === 'ua' ? s.lang_btn__active : '')}
				onClick={() => handleChangeLanguage('ua')}
			>
				UA
			</button>
			<span></span>
			<button
				className={clsx(s.lang_btn, language === 'en' ? s.lang_btn__active : '')}
				onClick={() => handleChangeLanguage('en')}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageSwitcher;
