import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const Bestsellers = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="bestsellers mb-30">
			<HomeBlock title={t.bestsellers[lang]} cards={cards} />
		</div>
	);
};
