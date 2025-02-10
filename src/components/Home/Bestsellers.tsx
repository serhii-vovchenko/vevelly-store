import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

export const Bestsellers = () => {
	return (
		<div className="bestsellers mb-30">
			<HomeBlock title="Bestsellers" cards={cards} />
		</div>
	);
};
