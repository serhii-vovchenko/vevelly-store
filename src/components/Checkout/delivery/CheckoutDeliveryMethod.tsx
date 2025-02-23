import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../Form/form-input';

const shops = ['Shop1', 'Shop2'];
const posts = ['Post1', 'Post2'];

export const CheckoutDeliveryMethod: React.FC = () => {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();
	const [deliveryMethod, setDeliveryMethod] = useState('');
	const [selectedOption, setSelectedOption] = useState('');

	const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const method = event.target.value;
		setDeliveryMethod(method);
		setValue('deliveryMethod', method);
		setSelectedOption('');
	};

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
		if (deliveryMethod === 'store') {
			setValue('shop', event.target.value);
		} else if (deliveryMethod === 'mail') {
			setValue('post', event.target.value);
		}
	};

	return (
		<div className="flex flex-col gap-5">
			<label className="flex items-center">
				<input
					type="radio"
					{...register('deliveryMethod', { required: 'Выберите способ доставки' })}
					value="store"
					checked={deliveryMethod === 'store'}
					onChange={handleDeliveryMethodChange}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up from store
			</label>
			{deliveryMethod === 'store' && (
				<select
					name="shop"
					value={selectedOption}
					onChange={handleSelectChange}
					className="text-base p-2 !my-2 border border-[#D6E8EE] rounded-sm"
					{...register('shop')}
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
					{...register('deliveryMethod', { required: 'Выберите способ доставки' })}
					value="mail"
					checked={deliveryMethod === 'mail'}
					onChange={handleDeliveryMethodChange}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up at the post office
			</label>
			{deliveryMethod === 'mail' && (
				<select
					name="post"
					value={selectedOption}
					onChange={handleSelectChange}
					className="text-base p-2 !my-2 border border-[#D6E8EE] rounded-sm"
					{...register('post')}
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
					{...register('deliveryMethod', { required: 'Выберите способ доставки' })}
					value="pickup"
					checked={deliveryMethod === 'pickup'}
					onChange={handleDeliveryMethodChange}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Address delivery
			</label>
			{deliveryMethod === 'pickup' && (
				<div className="flex flex-col gap-3">
					<FormInput
						name="street"
						placeholder="Street"
						className="text-base"
						{...register('street')}
					/>
					<div className="wrap flex flex-row gap-5">
						<FormInput
							name="house"
							placeholder="House"
							className="text-base w-1/2"
							{...register('house')}
						/>
						<FormInput
							name="apartment"
							placeholder="Apartment"
							className="text-base w-1/2"
							{...register('apartment')}
						/>
					</div>
					<FormInput
						name="comment"
						placeholder="Comment"
						className="text-base"
						{...register('comment')}
					/>
				</div>
			)}
			{errors.deliveryMethod?.message && (
				<span className="text-red-500 text-sm">{errors.deliveryMethod.message}</span>
			)}
		</div>
	);
};
