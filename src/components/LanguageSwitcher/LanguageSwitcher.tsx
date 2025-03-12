import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/language/operations';
import { selectLanguage } from '../../redux/language/selectors';

const LanguageSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);

	const handleChangeLanguage = (lang: 'ua' | 'en') => {
		dispatch(changeLanguage(lang));
	};

	return (
		<div className="flex items-center gap-[5px]">
			<button
				className={clsx(
					'text-lg leading-4.5  border-0 outline-0 cursor-pointer bg-transparent',
					language === 'ua' ? 'text-[#0d0c0c]' : 'text-[#c0c0c0]'
				)}
				onClick={() => handleChangeLanguage('ua')}
			>
				UA
			</button>
			<span className="w-[1px] h-[18px] bg-[#000]"></span>
			<button
				className={clsx(
					'text-lg leading-4.5  border-0 outline-0 cursor-pointer bg-transparent',
					language === 'en' ? 'text-[#0d0c0c]' : 'text-[#c0c0c0]'
				)}
				onClick={() => handleChangeLanguage('en')}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageSwitcher;
