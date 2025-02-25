import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckoutGuestPersonal } from './CheckoutGuestPersonal';
import { CheckoutPayment } from './CheckoutPayment';
import { CheckoutPersonal } from './CheckoutPersonal';
import { CheckoutReceiver } from './CheckoutReceiver';
import { CheckoutDelivery } from './delivery/CheckoutDelivery';

interface Props {
	className?: string;
	isAuthenticated: boolean;
}

export const GuestTab: React.FC<Props> = ({ className, isAuthenticated }) => {
	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useFormContext();
	console.log('Errors:', errors);

	useEffect(() => {
		if (isAuthenticated) {
			const userData = {
				firstName: 'John',
				lastName: 'Doe',
				email: 'john.doe@example.com',
				phone: '+1234567890',
			};

			setValue('firstName', userData.firstName);
			setValue('lastName', userData.lastName);
			setValue('email', userData.email);
			setValue('phone', userData.phone);
		} else {
			setValue('firstName', '');
			setValue('lastName', '');
			setValue('email', '');
			setValue('phone', '');
		}
	}, [isAuthenticated, setValue]);

	return (
		<>
			{isAuthenticated ? (
				<CheckoutPersonal />
			) : (
				<CheckoutGuestPersonal isAuthenticated={isAuthenticated} />
			)}
			<CheckoutDelivery />
			<CheckoutPayment />
			<CheckoutReceiver />
		</>
	);
};
