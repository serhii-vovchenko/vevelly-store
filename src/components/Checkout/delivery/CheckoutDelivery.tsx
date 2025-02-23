import React from 'react';
import { WhiteBlock } from '../white-block';
import { CheckoutCitySelect } from './CheckoutCitySelect';
import { CheckoutDeliveryMethod } from './CheckoutDeliveryMethod';

export const CheckoutDelivery: React.FC = () => {
	return (
		<WhiteBlock title="2. Delivery">
			<div className="flex flex-col gap-5">
				<CheckoutCitySelect />
				<CheckoutDeliveryMethod />
			</div>
		</WhiteBlock>
	);
};
