import { useState } from 'react';
import { FormInput } from '../../Form/form-input';

const shops = ['Shop1', 'Shop2'];
const posts = ['Post1', 'Post2'];

export const CheckoutDeliveryMethod: React.FC = () => {
	const [deliveryMethod, setDeliveryMethod] = useState('mail');
	const [selectedOption, setSelectedOption] = useState('');

	const handleDeliveryMethodChange = (method: string) => {
		setDeliveryMethod(method);
		setSelectedOption('');
	};

	const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="flex flex-col gap-5">
			<label className="flex items-center">
				<input
					type="radio"
					name="deliveryMethod"
					value="store"
					checked={deliveryMethod === 'store'}
					onChange={() => handleDeliveryMethodChange('store')}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up from store
			</label>
			{deliveryMethod === 'store' && (
				<select
					name="shop"
					value={selectedOption}
					onChange={handleOptionSelect}
					className="text-base p-2 !my-2 border border-[#D6E8EE] rounded-sm"
				>
					<option value="" disabled>
						Select Shop
					</option>
					{shops.map(shop => (
						<option key={shop} value={shop}>
							{shop}
						</option>
					))}
				</select>
			)}
			<label className="flex items-center">
				<input
					type="radio"
					name="deliveryMethod"
					value="mail"
					checked={deliveryMethod === 'mail'}
					onChange={() => handleDeliveryMethodChange('mail')}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up at the post office
			</label>
			{deliveryMethod === 'mail' && (
				<select
					name="post"
					value={selectedOption}
					onChange={handleOptionSelect}
					className="text-base p-2 !my-2 border border-[#D6E8EE] rounded-sm"
				>
					<option value="" disabled>
						Select Post
					</option>
					{posts.map(post => (
						<option key={post} value={post}>
							{post}
						</option>
					))}
				</select>
			)}

			<label className="flex items-center mb-2">
				<input
					type="radio"
					name="deliveryMethod"
					value="pickup"
					checked={deliveryMethod === 'pickup'}
					onChange={() => handleDeliveryMethodChange('pickup')}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Address delivery
			</label>
			{deliveryMethod === 'pickup' && (
				<div className="flex flex-col gap-3">
					<FormInput name="street" placeholder="Steet" className="text-base" />
					<div className="wrap flex flex-row gap-5">
						<FormInput name="house" placeholder="House" className="text-base w-1/2" />
						<FormInput name="apartment" placeholder="Apartment" className="text-base w-1/2" />
					</div>
					<FormInput name="comment" placeholder="Comment" className="text-base" />
				</div>
			)}
		</div>
	);
};
