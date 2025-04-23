import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/selectors';
import { careRecommendation as t } from '../../../translations/translations';

const Recommendation = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div>
			<p className="text-lg text-[#0D0C0C] font-medium leading-6 !mb-0.5">{`${t.title[lang]}:`}</p>
			<ul className="!list-disc !pl-6">
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item1[lang]}</li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item2[lang]} </li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item3[lang]} </li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item4[lang]} </li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item5[lang]} </li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item6[lang]} </li>
				<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.item7[lang]} </li>
			</ul>
		</div>
	);
};

export default Recommendation;
