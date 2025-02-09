import { Card } from '../../Card';
import { Container } from '../../Container/Container';

export const Watch = () => {
	const cards = [
		{
			id: 1,
			img: '/watch1.png',
			title: 'Beauty line',
			category: 'Watches',
			fav: false,
			price: 349,
		},
		{
			id: 2,
			img: '/watch2.png',
			title: 'Memory',
			category: 'Watches',
			badge: 'New',
			fav: false,
			price: 660,
		},
		{
			id: 3,
			img: '/watch3.png',
			title: 'Beauty line',
			category: 'Watches',
			fav: false,
			price: 409,
		},
		{
			id: 4,
			img: '/watch4.png',
			title: 'Dance of Nature',
			category: 'Watches',
			fav: true,
			old_price: 555,
			price: 349,
		},
	];
	return (
		<div className="watch mb-30">
			<Container>
				<div className="flex items-center justify-between">
					<div className="title text-[46px] uppercase font-medium leading-15 text-[#0D0C0C] mb-4">
						Watch for him
					</div>
					<div className="text-lg font-light leading-6 text-[#0d0c0c]">see all</div>
				</div>
			</Container>
			<Container>
				<div className="flex items-center justify-between">
					<Card cards={cards} />
				</div>
			</Container>
		</div>
	);
};
