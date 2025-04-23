import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/language/selectors';
import { sorting as t } from '../translations/translations';

export const Sorting: React.FC = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="sorting absolute w-[200px] z-10 top-10 -right-16 bg-white px-5 py-2 shadow-xl">
			<div className="sorting_wrap flex flex-col gap-2 items-start">
				<button onClick={() => console.log('Sort by Name')}>{t.lowestPrice[lang]}</button>
				<button onClick={() => console.log('Sort by Name')}>{t.highestPrice[lang]}</button>
				<button onClick={() => console.log('Sort by Name')}>{t.bestsellers[lang]}</button>
				<button onClick={() => console.log('Sort by Name')}>{t.popularity[lang]}</button>
				<button onClick={() => console.log('Sort by Name')}>{t.novelty[lang]}</button>
				<button onClick={() => console.log('Sort by Price')}>{t.rating[lang]}</button>
			</div>
		</div>
	);
};
