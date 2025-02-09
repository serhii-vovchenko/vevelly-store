import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

interface CartItem {
	id: number;
	img: string;
	badge?: string;
	fav?: boolean;
	category: string;
	title: string;
	old_price?: number;
	price?: number;
}

interface Props {
	cards: CartItem[];
}

export const Card: React.FC<Props> = ({ cards }) => {
	return cards.map(item => {
		return (
			<div key={item.id} className="card">
				<div className="img w-[270px] relative">
					{item.badge && (
						<span
							className={clsx(
								item.badge === 'Sale' ? 'bg-[#FF8D8D]' : '',
								item.badge === 'New' ? 'bg-[#D6E8EE]' : '',
								'badge-card absolute top-0 left-0 py-1.5 px-2.5'
							)}
						>
							{item.badge}
						</span>
					)}
					<span className="fav-card absolute top-0 right-0 ">
						{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
					</span>
					<img src={item.img} alt={item.title} />
				</div>
				<div className="wrap_info text-center">
					<div className="category text-lg leading-6">{item.category}</div>
					<div className="title text-sm leading-6">{item.title}</div>
					<div className="price text-lg leading-6">
						{item.old_price ? (
							<>
								<span className="line-through">${item.old_price}</span>{' '}
								<span className="text-red-400">$ {item.price}</span>
							</>
						) : (
							<span>${item.price}</span>
						)}
					</div>
				</div>
			</div>
		);
	});
};
