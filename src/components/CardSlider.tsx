import clsx from 'clsx';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from './Button';
import { useCurrencyConverter } from './CurrencyConverter';
import Icon from './Icon';

export type CartItemType = {
	id: number;
	images: string | string[];
	statuses?: string[];
	fav?: boolean;
	category: string;
	name: string;
	subproducts: CartSubproductsType[];
};

type CartSubproductsType = {
	article: string;
	discount_applied: number;
	discount_percentage: string;
	ean_13: string | null;
	id: number;
	length: number;
	max_length: string | null;
	new_price: number;
	old_price: number;
	position: number;
	price: string;
	size: string;
	sku: string;
	weight: number;
	width: string | null;
};

interface Props {
	cards: CartItemType[];
}

export const CardSlider: React.FC<Props> = ({ cards }) => {
	const { cur_conv } = useCurrencyConverter();
	const [imgIndices, setImgIndices] = useState<Record<number, number>>({});
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	const statusStyles: Record<string, string> = {
		'Хіт продажів': 'bg-[#FF8D8D]',
		Новинка: 'bg-[#D6E8EE]',
		Акція: 'bg-[#FFD700]',
	};

	const handleNextImage = (itemId: number, imagesLength: number) => {
		if (imagesLength > 1) {
			setImgIndices(prev => ({
				...prev,
				[itemId]: ((prev[itemId] || 0) + 1) % imagesLength,
			}));
		}
	};

	return (
		<div className="w-full">
			<AnySlider {...settings}>
				{cards.map(item => {
					const images = Array.isArray(item.images) ? item.images : [item.images];
					const currentImgIndex = imgIndices[item.id] || 0;

					return (
						<div key={item.id} className="card group px-5">
							<div className="img relative">
								{item.statuses && item.statuses.length > 0 && (
									<>
										{item.statuses.map((status, index) => (
											<span
												key={index}
												className={clsx(
													statusStyles[status] || 'bg-gray-200',
													'badge-card absolute left-0 py-1.5 px-2.5  rounded'
												)}
												style={{ top: `${index * 2.5}rem` }}
											>
												{status}
											</span>
										))}
									</>
								)}
								<span className="fav-card absolute top-0 right-0 ">
									{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
								</span>
								<img
									src={images[currentImgIndex]}
									alt={item.name}
									className="!h-[300px] object-cover"
								/>
								{images.length > 1 && (
									<span
										className="absolute bottom-0 right-0 p-2 cursor-pointer"
										onClick={() => handleNextImage(item.id, images.length)}
									>
										<Icon name="down" color="#018ABE" className="-rotate-90" />
									</span>
								)}
							</div>
							<div className="wrap_info text-center">
								<div className="category text-lg leading-6">{item.category}</div>
								<div className="title text-sm leading-6">{item.name}</div>
								<div className="price text-lg leading-6">
									{item.subproducts && item.subproducts.length > 0 ? (
										<>
											{item.subproducts[0].old_price ? (
												<>
													<span className="line-through">
														{cur_conv(item.subproducts[0].old_price)}
													</span>{' '}
													<span className="text-red-400">
														{cur_conv(item.subproducts[0].new_price)}
													</span>
												</>
											) : (
												<span>{cur_conv(item.subproducts[0].price)}</span>
											)}
										</>
									) : null}
								</div>
								<Button className="hidden group-hover:block mt-2" type="button" variant="primary">
									Add to bag
								</Button>
							</div>
						</div>
					);
				})}
			</AnySlider>
		</div>
	);
};
