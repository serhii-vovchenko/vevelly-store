import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

export type CartItemType = {
	id: number;
	img: string;
	badge?: string | string[];
	fav?: boolean;
	category: string;
	title: string;
	old_price?: number;
	price?: number;
};

interface Props {
	cards: CartItemType[];
}

export const CardItems: React.FC<Props> = ({ cards }) => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18">
			{cards.map(item => {
				return (
					<div key={item.id} className="card py-5">
						<div className="img relative mb-2">
							{Array.isArray(item.badge)
								? item.badge.map((badge, index) => (
										<span
											key={index}
											className={clsx(
												badge === 'Sale' ? 'bg-[#FB3636]' : '',
												badge === 'New' ? 'bg-[#018ABE]' : '',
												badge === 'Top' ? 'bg-[#D6E8EE]' : '',
												'badge-card absolute top-0 left-0 py-1.5 px-2.5',
												index > 0 && 'mt-10'
											)}
										>
											{badge}
										</span>
								  ))
								: item.badge && (
										<span
											className={clsx(
												item.badge === 'Sale' ? 'bg-[#FB3636]' : '',
												item.badge === 'New' ? 'bg-[#018ABE]' : '',
												item.badge === 'Top' ? 'bg-[#D6E8EE]' : '',
												'badge-card absolute top-0 left-0 py-1.5 px-2.5'
											)}
										>
											{item.badge}
										</span>
								  )}
							<span className="fav-card absolute top-0 right-0 ">
								{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
							</span>
							<img src={item.img} alt={item.title} className="!h-[300px] object-cover" />
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
			})}
		</div>
	);
};
