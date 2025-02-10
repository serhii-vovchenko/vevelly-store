import React from 'react';
import { Card, CartItem } from '../Card';
import { Container } from '../Container/Container';

interface Props {
	title: string;
	cards: CartItem[];
}

export const HomeBlock: React.FC<Props> = ({ title, cards }) => {
	return (
		<>
			<Container>
				<div className="flex items-center justify-between pb-10">
					<div className="title text-[46px] uppercase font-medium leading-15 text-[#0D0C0C] mb-4">
						{title}
					</div>
					<div className="text-lg font-light leading-6 text-[#0d0c0c]">see all</div>
				</div>
			</Container>
			<Container>
				<div className="flex items-center justify-between">
					<Card cards={cards} />
				</div>
			</Container>
		</>
	);
};
