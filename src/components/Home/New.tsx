import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

export const NewProducts = () => {
	return (
		<div className="new mb-30">
			<HomeBlock title="New" cards={cards} />
		</div>
	);
};
