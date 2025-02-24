import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../Form/Form-input';

const shops = ['Shop1', 'Shop2'];
const posts = ['Post1', 'Post2'];

export const CheckoutDeliveryMethod: React.FC = () => {
	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useFormContext();

	const deliveryMethod = watch('deliveryMethod');
	const selectedShop = watch('shop');
	const selectedPost = watch('post');

	const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const method = event.target.value;
		setValue('deliveryMethod', method);

		if (method === 'store') {
			setValue('post', '');
			setValue('street', '');
			setValue('house', '');
			setValue('apartment', '');
			setValue('comment', '');
		} else if (method === 'mail') {
			setValue('shop', '');
			setValue('street', '');
			setValue('house', '');
			setValue('apartment', '');
			setValue('comment', '');
		} else if (method === 'pickup') {
			setValue('shop', '');
			setValue('post', '');
		}
	};

	return (
		<div className="flex flex-col gap-5">
			<label className="flex items-center">
				<input
					type="radio"
					{...register('deliveryMethod', { required: 'Select a delivery method' })}
					value="store"
					checked={deliveryMethod === 'store'}
					onChange={handleDeliveryMethodChange}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up from store
			</label>
			{deliveryMethod === 'store' && (
				<select
					{...register('shop', deliveryMethod === 'store' ? { required: 'Select a shop' } : {})}
					value={selectedShop}
					onChange={e => setValue('shop', e.target.value)}
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
					{...register('deliveryMethod', { required: 'Select a delivery method' })}
					value="mail"
					checked={deliveryMethod === 'mail'}
					onChange={handleDeliveryMethodChange}
					className="!mr-2 w-4.5 h-4.5"
				/>
				Pick up at the post office
			</label>
			{deliveryMethod === 'mail' && (
				<select
					{...register(
						'post',
						deliveryMethod === 'mail' ? { required: 'Select a post office' } : {}
					)}
					value={selectedPost}
					onChange={e => setValue('post', e.target.value)}
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
					{...register('deliveryMethod', { required: 'Select a delivery method' })}
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
						placeholder="Street"
						className="text-base"
						{...register('street', deliveryMethod === 'pickup' ? { required: 'Enter street' } : {})}
					/>
					<div className="wrap flex flex-row gap-5">
						<FormInput
							placeholder="House"
							className="text-base w-1/2"
							{...register(
								'house',
								deliveryMethod === 'pickup' ? { required: 'Enter house number' } : {}
							)}
						/>
						<FormInput
							placeholder="Apartment"
							className="text-base w-1/2"
							{...register(
								'apartment',
								deliveryMethod === 'pickup' ? { required: 'Enter apartment number' } : {}
							)}
						/>
					</div>
					<FormInput placeholder="Comment" className="text-base" {...register('comment')} />
				</div>
			)}

			{errors.deliveryMethod?.message && (
				<span className="text-red-500 text-sm">{errors.deliveryMethod.message as String}</span>
			)}
		</div>
	);
};
