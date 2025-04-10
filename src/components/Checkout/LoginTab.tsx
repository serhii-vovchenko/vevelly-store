import clsx from 'clsx';
import React from 'react';

import { SubmitHandler, useFormContext } from 'react-hook-form';
import Button from '../Button';
import { FormInput } from '../Form/Form-input';
import { LoginValues } from './checkout-form-schema';

interface Props {
	className?: string;
	onLogin: (data: LoginValues) => void;
	isAuthenticated: boolean;
}

export const LoginTab: React.FC<Props> = ({ className, onLogin, isAuthenticated }) => {
	const { register, handleSubmit, reset } = useFormContext();

	const onSubmit: SubmitHandler<LoginValues> = data => {
		onLogin(data);
		reset();
	};

	return (
		<div className={clsx('border border-[#D6E8EE] p-10', className)}>
			<div className="flex flex-col gap-5 ">
				<FormInput placeholder="E-mail" className="text-base" {...register('login_email')} />
				<FormInput
					type="password"
					placeholder="Password"
					className="text-base"
					{...register('login_password')}
				/>
				<Button type="submit" className="w-full" variant="primary">
					Place order
				</Button>
			</div>
			<div className="text-center text-sm text-[#0D0C0C] mt-5">or</div>
			<div className="flex justify-center items-center gap-5 mt-5	">
				<button className="w-[280px] p-2.5 flex items-center justify-center gap-2 rounded-sm border border-[#D6E8EE]">
					<img src="/google.png" alt="Google" className="w-6 h-6	" />
					Google
				</button>
				<button className="w-[280px] p-2.5 flex items-center justify-center gap-2 rounded-sm border border-[#D6E8EE]">
					<img src="/apple.png" alt="Apple" className="w-6 h-6" />
					Apple
				</button>
			</div>
		</div>
	);
};
