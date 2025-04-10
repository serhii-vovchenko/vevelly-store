import React from 'react';
import { FormInput } from '../Form/Form-input';
import { WhiteBlock } from './white-block';

export const CheckoutPersonal: React.FC = () => {
	return (
		<WhiteBlock title="1. Personal info">
			<div className="flex flex-col gap-5">
				<FormInput name="firstName" label="Name" className="text-base" />
				<FormInput name="lastName" label="Surname" className="text-base" />
			</div>
		</WhiteBlock>
	);
};
