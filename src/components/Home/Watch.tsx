import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

export const Watch = () => {
	return (
		<div className="watch mb-30">
			<HomeBlock title="Watch for him" cards={cards} />
		</div>
	);
};
