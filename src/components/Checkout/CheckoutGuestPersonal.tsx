import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../Form/Form-input';
import { WhiteBlock } from './white-block';

interface Props {
	isAuthenticated: boolean;
}

export const CheckoutGuestPersonal: React.FC<Props> = ({ isAuthenticated }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<WhiteBlock title="1. Personal info">
			<div className="flex flex-col gap-5">
				<FormInput
					label="Name"
					className="text-base"
					{...register('firstName', { required: 'Enter your name' })}
				/>
				<FormInput
					label="Surname"
					className="text-base"
					{...register('lastName', { required: 'Enter your surname' })}
				/>
				<FormInput
					label="Email"
					className="text-base"
					{...register('email', {
						required: !isAuthenticated ? 'Enter your email' : false,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email format',
						},
					})}
				/>
				<FormInput
					label="Phone"
					className="text-base"
					{...register('phone', {
						required: !isAuthenticated ? 'Enter your phone number' : false,
						minLength: {
							value: 10,
							message: 'Phone number must be at least 10 characters',
						},
					})}
				/>
			</div>
		</WhiteBlock>
	);
};
