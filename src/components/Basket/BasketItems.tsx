import React from 'react';
import Icon from '../Icon';
import { BasketType } from './Basket';

interface BasketItemsProps {
	item: BasketType;
}

export const BasketItems: React.FC<BasketItemsProps> = ({ item }) => {
	return (
		<div className="basket_item flex justify-between items-center w-full mb-4 border-b-[1px] border-[#D6E8EE] last:border-none pb-4">
			<div className="basket_item_left flex items-center w-full">
				<div className="basket_item_img mr-4 border border-[#018ABE]">
					<img src={item.img} alt={item.title} className="!w-[197px] !h-[121px] object-cover" />
				</div>
				<div className="basket_item_info flex-grow relative">
					<p className="basket_item_title  text-base text-[#0D0C0C] leading-5  font-bold">
						{item.title}
					</p>
					<p className="basket_item_price text-xs text-[#0D0C0C] leading-3 font-light">
						SKU: {item.sku}
					</p>
					<p className="basket_item_price  text-sm text-[#0D0C0C] leading-5  font-light">
						Size: {item.size}
					</p>
					<div className="basket_item_price text-lg flex justify-end items-center ">
						$ {item.price}
					</div>
					<div className="basket_item_count flex justify-end items-center mt-2">
						<button className="basket_item_count_minus">
							<Icon name="minus" width={14} height={14} stroke="#c0c0c0" />
						</button>
						<div className="basket_item_count_number text-lg leading-6 font-bold mx-2.5">1</div>
						<button className="basket_item_count_plus">
							<Icon name="plus" color="none" width={14} height={14} />
						</button>
					</div>
					<button className="basket_item_delete absolute top-0 right-2">
						<Icon name="delete" color="none" width={12} height={12} />
					</button>
				</div>
			</div>
		</div>
	);
};
