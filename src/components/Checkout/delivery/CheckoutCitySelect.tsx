import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../Form/form-input';
import Icon from '../../Icon';

const cities = ['Київ', 'Львів', 'Одеса', 'Дніпро', 'Харків'];

export const CheckoutCitySelect: React.FC = () => {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();
	const [showCityDropdown, setShowCityDropdown] = useState(false);
	const [selectedCity, setSelectedCity] = useState('');

	const toggleCityDropdown = () => {
		setShowCityDropdown(!showCityDropdown);
	};

	const handleCitySelect = (city: string) => {
		setSelectedCity(city);
		setValue('city', city);
		setShowCityDropdown(false);
	};

	return (
		<div className="relative">
			<FormInput
				name="city"
				placeholder="City"
				value={selectedCity}
				readOnly
				inputClassName="!border-l-0 !border-r-0 !border-t-0 border-b border-[#D6E8EE] !rounded-none"
				className="text-base"
				onClick={toggleCityDropdown}
				{...register('city', { required: 'Выберите город' })}
			/>
			<span
				className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
				onClick={toggleCityDropdown}
			>
				<Icon
					name="down"
					width={18}
					height={18}
					color="#018ABE"
					className={showCityDropdown ? 'rotate-180' : ''}
				/>
			</span>
			{showCityDropdown && (
				<div className="absolute top-full left-0 w-full bg-white border border-[#D6E8EE] mt-1 z-10 rounded-sm">
					<input
						type="text"
						placeholder="Search city"
						className="w-full p-2 border-b border-[#D6E8EE] rounded-sm"
						onChange={e => setSelectedCity(e.target.value)}
					/>
					<ul className="max-h-40 overflow-y-auto">
						{cities
							.filter(city => city.toLowerCase().includes(selectedCity.toLowerCase()))
							.map(city => (
								<li
									key={city}
									className="p-2 cursor-pointer hover:bg-[#D6E8EE]"
									onClick={() => handleCitySelect(city)}
								>
									{city}
								</li>
							))}
					</ul>
				</div>
			)}
			
		</div>
	);
};
