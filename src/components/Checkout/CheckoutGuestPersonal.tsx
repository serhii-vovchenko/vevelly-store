import React from 'react';
import { FormInput } from '../Form/form-input';
import { WhiteBlock } from './white-block';

export const CheckoutGuestPersonal: React.FC = () => {
	return (
		<WhiteBlock title="1. Personal info">
			<div className="flex flex-col gap-5">
				<FormInput name="firstName" label="Name" className="text-base" />
				<FormInput name="lastName" label="Surname" className="text-base" />
				<FormInput name="email" label="Email" className="text-base" />
				<FormInput name="phone" label="Phone" className="text-base" />
			</div>
		</WhiteBlock>
	);
};
