import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../Form/Form-input';
import { WhiteBlock } from './white-block';

export const CheckoutReceiver: React.FC = () => {
	const {
		register,
		trigger,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext();

	const [receiver, setReceiver] = useState(watch('receiver') || '');
	const handleReceiverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const method = event.target.value;
		setReceiver(method);
		setValue('receiver', method, { shouldValidate: true });
		trigger('receiver');

		if (method === 'another') {
			trigger('Name');
			trigger('Subname');
			trigger('phone');
		}
	};
	return (
		<WhiteBlock title="4. Order receiver">
			<div className="flex flex-col gap-5">
				<label className="flex items-center">
					<input
						type="radio"
						{...register('receiver', { required: 'Choose recipient' })}
						value="recipient"
						checked={receiver === 'recipient'}
						className="!mr-2 w-4.5 h-4.5"
						onChange={handleReceiverChange}
					/>
					I am
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						{...register('receiver', { required: 'Choose recipient' })}
						value="another"
						checked={receiver === 'another'}
						className="!mr-2 w-4.5 h-4.5"
						onChange={handleReceiverChange}
					/>
					Another person
				</label>
				{receiver === 'another' && (
					<div className="flex flex-col gap-3">
						<div className="flex flex-row gap-5">
							<FormInput
								placeholder="Name"
								className="text-base w-1/2"
								{...register(
									'receiver_name',
									receiver === 'another' ? { required: 'Enter name' } : {}
								)}
							/>
							<FormInput
								placeholder="Subname"
								className="text-base w-1/2"
								{...register(
									'receiver_subname',
									receiver === 'another' ? { required: 'Enter subname' } : {}
								)}
							/>
						</div>
						<FormInput
							placeholder="Phone number"
							className="text-base"
							{...register(
								'receiver_phone',
								receiver === 'another' ? { required: 'Enter phone number' } : {}
							)}
						/>
					</div>
				)}
				{errors.receiver?.message && (
					<span className="text-red-500 text-sm">{errors.receiver.message as String}</span>
				)}
			</div>
		</WhiteBlock>
	);
};
