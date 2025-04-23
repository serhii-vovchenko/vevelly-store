import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/selectors';

import { delivery as t } from '../../../translations/translations';

const Delivery = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="flex flex-col gap-5">
			<p className="text-lg text-[#0D0C0C] font-thin leading-6">{t.deliveryTime[lang]}</p>
			<div>
				<p className="text-lg text-[#0D0C0C] font-medium leading-6 !mb-0.5">
					{t.deliveryListTitle[lang]}
				</p>
				<ul className="!list-disc !pl-6">
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.deliveryItem1[lang]}</li>
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.deliveryItem2[lang]}</li>
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">{t.deliveryItem3[lang]}</li>
				</ul>
			</div>
			<p className="text-lg text-[#0D0C0C] font-thin leading-6">{t.deliveryTrack[lang]}</p>
		</div>
	);
};

export default Delivery;
