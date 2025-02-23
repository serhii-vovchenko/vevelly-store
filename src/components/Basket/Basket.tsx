import React from 'react';
import { basket } from '../../seed/seed';
import Button from '../Button';
import Icon from '../Icon';
import { BasketItems } from './BasketItems';

export type BasketType = {
	id: number;
	path: string;
	img: string;
	title: string;
	desc: string;
	sku: number;
	material: string;
	size: number;
	price: number;
	old_price: number;
};

interface BasketProps {
	onClose: () => void;
}

export const Basket: React.FC<BasketProps> = ({ onClose }) => {
	const hasItems = basket && Array.isArray(basket) && basket.length > 0;

	return (
		<div className="shadow-xl w-[400px] bg-white flex flex-col">
			<div className="basket_header h-15 bg-[#D6E8EE] flex justify-center items-center relative">
				<div className="basket_title text-2xl uppercase text-center">Shopping bag</div>
				<div className="absolute top-auto right-10 cursor-pointer" onClick={onClose}>
					<Icon name="close" width={12} height={12} className="basket_close" />
				</div>
			</div>
			<div className="basket_content flex justify-center items-center flex-col">
				{hasItems ? (
					<div className="basket_items w-full p-6">
						{basket.map(item => (
							<BasketItems key={item.id} item={item} />
						))}
					</div>
				) : (
					<p className="basket_empty_text font-light text-lg leading-6 py-10">
						Your basket is empty
					</p>
				)}
			</div>
			<div className="basket_footer mt-auto">
				<div className="basket_footer_total flex justify-between items-center p-6">
					<div className="flex items-center">
						<p className="basket_footer_total_text text-lg leading-6 font-bold pr-2">Total: </p>
						<p className="basket_footer_total_price text-lg leading-6 font-bold ml-2">
							$ {basket.reduce((total, item) => total + item.price, 0)}
						</p>
					</div>
					<Button type="button" variant="primary" className="!w-[200px]">
						Proceed checkout
					</Button>
				</div>
			</div>
		</div>
	);
};
