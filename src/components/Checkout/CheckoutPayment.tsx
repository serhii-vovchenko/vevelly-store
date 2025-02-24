import React from 'react';
import { useFormContext } from 'react-hook-form';
import { WhiteBlock } from './white-block';

export const CheckoutPayment: React.FC = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<WhiteBlock title="3. Payment">
			<div className="flex flex-col gap-5">
				<label className="flex items-center">
					<input
						type="radio"
						{...register('payment', { required: 'Выберите способ оплаты' })}
						value="cash"
						className="!mr-2 w-4.5 h-4.5"
					/>
					Cash on delivery
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						{...register('payment', { required: 'Выберите способ оплаты' })}
						value="apple"
						className="!mr-2 w-4.5 h-4.5"
					/>
					Apple pay / Google pay
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						{...register('payment', { required: 'Выберите способ оплаты' })}
						value="installments"
						className="!mr-2 w-4.5 h-4.5"
					/>
					Payment in installments
				</label>
				{errors.payment && <span className="text-red-500 text-sm">{errors.payment.message as String}</span>}
			</div>
		</WhiteBlock>
	);
};
