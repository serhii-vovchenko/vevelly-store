import React from 'react';
import { WhiteBlock } from './white-block';

export const CheckoutPayment: React.FC = () => {
	return (
		<WhiteBlock title="3. Payment">
			<div className="flex flex-col gap-5">
				<label className="flex items-center">
					<input type="radio" name="paymentMethod" value="cash" className="!mr-2 w-4.5 h-4.5" />
					Cash on delivery
				</label>
				<label className="flex items-center">
					<input type="radio" name="paymentMethod" value="apple" className="!mr-2 w-4.5 h-4.5" />
					Apple pay / Google pay
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						name="paymentMethod"
						value="installments"
						className="!mr-2 w-4.5 h-4.5"
					/>
					Payment in installments
				</label>
			</div>
		</WhiteBlock>
	);
};
