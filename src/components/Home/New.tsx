import { HomeBlock } from './HomeBlock';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';
import ProductStatusSort from '../ProductStatusSort';

export const NewProducts = () => {
	const lang = useSelector(selectLanguage);
	const cards = ProductStatusSort({ status: 'Новинка' });

	return (
		<div className="new mb-30">
			<HomeBlock title={t.new[lang]} cards={cards} see_all_link={'/new-products'} />
		</div>
	);
};
