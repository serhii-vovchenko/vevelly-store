import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	inputClassName?: string;
	required?: boolean;
	className?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	({ className, name, label, inputClassName, required, ...props }, ref) => {
		const {
			control,
			formState: { errors },
		} = useFormContext();

		return (
			<div className={clsx('relative', className)}>
				{label && (
					<label
						htmlFor={name}
						className={`absolute top-0 left-2.5 transform -translate-y-1/2 z-10 bg-white px-1 text-sm ${
							required ? 'text-xs' : 'text-base'
						} transition-all duration-200`}
					>
						{label} {required && <span className="text-red-500">*</span>}
					</label>
				)}
				<div className="relative">
					<Controller
						name={name}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<>
								{name === 'phone' || name === 'phone_receiver' ? (
									<IMaskInput
										id={name}
										mask="+38 (000) 000-00-00"
										placeholder="+38 (___) ___-__-__"
										value={field.value}
										onFocus={e => {
											if (!field.value) field.onChange('+38 (0');
										}}
										className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10 text-md  border-[#D6E8EE]"
										onAccept={field.onChange}
										inputRef={ref}
										{...props}
									/>
								) : (
									<input
										id={name}
										className={clsx(
											inputClassName,
											'h-10 text-md w-full p-2.5 border-[1px] rounded-см border-[#D6E8EE]'
										)}
										{...props}
										ref={ref}
										onChange={field.onChange}
										onBlur={field.onBlur}
										value={field.value}
									/>
								)}
								{error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
							</>
						)}
					/>
				</div>
			</div>
		);
	}
);

FormInput.displayName = 'FormInput';
