import clsx from 'clsx';
import React from 'react';
import { basket } from '../../seed/seed';
import { BasketItems } from '../Basket/BasketItems';
import Button from '../Button';

interface Props {
	className?: string;
	triggerFormSubmit: () => void;
}

export const CheckoutBasket: React.FC<Props> = ({ className, triggerFormSubmit }) => {
	return (
		<div className={clsx('basket_content flex justify-center items-center flex-col ', className)}>
			<div className="checkout_basket_items w-full">
				{basket.map(item => (
					<BasketItems key={item.id} item={item} />
				))}
			</div>
			<div className="promocode flex items-center justify-between w-full gap-4 border-b-[1px] border-[#D6E8EE] pb-10">
				<input
					type="text"
					placeholder="Enter promocode"
					className="promocode_input w-1/2 text-lg text-[#0D0C0C] leading-5 font-bold border-[1px] border-[#018ABE] rounded-sm py-2.5 px-2.5"
				/>
				<button className="promocode_btn w-1/2 text-lg text-[#0D0C0C] leading-5 font-bold bg-[#018ABE] rounded-sm py-2.5 px-2.5">
					Apply
				</button>
			</div>
			<div className="checkout_basket_total w-full flex justify-between items-center mt-5 mb-6">
				<div className="checkout_basket_total_text text-lg text-[#0D0C0C] leading-5 font-bold">
					Total
				</div>
				<div className="checkout_basket_total_price text-lg text-[#0D0C0C] leading-5 font-bold">
					$ {basket.reduce((total, item) => total + item.price, 0)}
				</div>
			</div>
			<Button className="checkout_go" variant="primary" type="button" onClick={triggerFormSubmit}>
				Checkout
			</Button>
		</div>
	);
};
