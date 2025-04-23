import React, { useState } from 'react';
import Description from './Description';
import Payment from './Payment';
import Delivery from './Delivery';
import Recommendation from './Recommendation';
import { selectLanguage } from '../../../redux/language/selectors';
import { useSelector } from 'react-redux';

import { aboutProduct as t } from '../../../translations/translations';

const AboutProduct = () => {
	const [activeTab, setActiveTab] = useState<string>('description');
	const lang = useSelector(selectLanguage);

	const tabClass =
		'p-2.5 w-full font-medium text-2xl leading-8 text-[#0D0C0C] border-r border-b border-r-[#D6E8EE] border-b-[#D6E8EE] cursor-pointer';

	const activeTabClass = '!border-r-[#018ABE] !border-b-[#018ABE]';

	const handleActiveTab = (tab: string): void => {
		setActiveTab(tab);
	};
	return (
		<div className="mb-30">
			<ul className="flex gap-10 justify-between !mb-5">
				<li
					onClick={() => handleActiveTab('description')}
					className={`${tabClass} ${activeTab === 'description' ? activeTabClass : ''}`}
				>
					{t.descriptionTab[lang]}
				</li>
				<li
					onClick={() => handleActiveTab('payment')}
					className={`${tabClass} ${activeTab === 'payment' ? activeTabClass : ''}`}
				>
					{t.paymentAndReturnTab[lang]}
				</li>
				<li
					onClick={() => handleActiveTab('delivery')}
					className={`${tabClass} ${activeTab === 'delivery' ? activeTabClass : ''}`}
				>
					{t.deliveryTab[lang]}
				</li>
				<li
					onClick={() => handleActiveTab('recommendation')}
					className={`${tabClass} ${activeTab === 'recommendation' ? activeTabClass : ''}`}
				>
					{t.careRecommendationTab[lang]}
				</li>
			</ul>
			{activeTab === 'description' && <Description />}
			{activeTab === 'payment' && <Payment />}
			{activeTab === 'delivery' && <Delivery />}
			{activeTab === 'recommendation' && <Recommendation />}
		</div>
	);
};

export default AboutProduct;
