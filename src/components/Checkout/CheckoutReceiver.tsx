import React, { useState } from 'react';
import { FormInput } from '../Form/form-input';
import { WhiteBlock } from './white-block';

export const CheckoutReceiver: React.FC = () => {
	const [receiver, setReceiver] = useState('');
	const handleReceiver = (method: string) => {
		setReceiver(method);
		console.log(method);
	};
	return (
		<WhiteBlock title="4. Order receiver">
			<div className="flex flex-col gap-5">
				<label className="flex items-center">
					<input
						type="radio"
						name="receiver"
						value="recipient"
						className="!mr-2 w-4.5 h-4.5"
						onChange={() => handleReceiver('recipient')}
					/>
					I am
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						name="receiver"
						value="another"
						className="!mr-2 w-4.5 h-4.5"
						onChange={() => handleReceiver('another')}
					/>
					Another person
				</label>
				{receiver === 'another' && (
					<div className="flex flex-col gap-3">
						<div className="flex flex-row gap-5">
							<FormInput name="name" placeholder="Name" className="text-base w-1/2" />
							<FormInput name="Subname" placeholder="Subname" className="text-base w-1/2" />
						</div>
						<FormInput name="phone" placeholder="Phone number" className="text-base" />
					</div>
				)}
			</div>
		</WhiteBlock>
	);
};
