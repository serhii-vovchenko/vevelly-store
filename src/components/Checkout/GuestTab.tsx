import React from 'react';
import { CheckoutGuestPersonal } from './CheckoutGuestPersonal';
import { CheckoutPayment } from './CheckoutPayment';
import { CheckoutReceiver } from './CheckoutReceiver';
import { CheckoutDelivery } from './delivery/CheckoutDelivery';

interface Props {
	className?: string;
}

export const GuestTab: React.FC<Props> = ({ className }) => {
	return (
		<>
			<CheckoutGuestPersonal />
			<CheckoutDelivery />
			<CheckoutPayment />
			<CheckoutReceiver />
		</>
	);
};
