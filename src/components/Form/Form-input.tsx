'use client';
import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	inputClassName?: string;
	required?: boolean;
	className?: string;
}

export const FormInput: React.FC<Props> = ({
	className,
	name,
	label,
	inputClassName,
	required,
	...props
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
		trigger,
	} = useFormContext();

	const value = watch(name);
	const errorText = errors[name]?.message as string;

	const handleMaskChange = (maskedValue: any) => {
		setValue(name, maskedValue, { shouldValidate: true });
		trigger(name);
	};

	return (
		<div className={clsx('relative', className)}>
			{label && (
				<label
					htmlFor={name}
					className={`absolute top-0 left-2.5 transform -translate-y-1/2 z-10 bg-white px-1 text-sm ${
						value ? 'text-xs' : 'text-base'
					} transition-all duration-200`}
				>
					{label} {required && <span className="text-red-500">*</span>}
				</label>
			)}

			<div className="relative">
				{name === 'phone' ? (
					<IMaskInput
						id="phone"
						mask="+38 (000) 000-00-00"
						placeholder="+38 (___) ___-__-__"
						value={value}
						onFocus={e => {
							if (!value) setValue(name, '+38 (0', { shouldValidate: true });
						}}
						className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10 text-md  border-[#D6E8EE]"
						onAccept={handleMaskChange}
					/>
				) : (
					<input
						id={name}
						className={clsx(
							inputClassName,
							'h-10 text-md w-full p-2.5 border-[1px] rounded-sm border-[#D6E8EE]'
						)}
						{...register(name)}
						{...props}
					/>
				)}
			</div>
			{errorText && <p className="text-red-500 text-sm mt-2">{errorText}</p>}
		</div>
	);
};
