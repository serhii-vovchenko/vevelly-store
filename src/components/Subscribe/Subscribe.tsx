import clsx from 'clsx';
import React from 'react';

interface Props {
	className?: string;
}

export const Subscribe: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx('pb-30', className)}>
			<div className="flex items-center justify-evenly py-10 mx-32 gap-5">
				<div className="subscribe text-center text-[32px] uppercase font-medium leading-[42px] text-[#0D0C0C]">
					we are giving 10% discount for subscription
				</div>
				<div className="flex flex-col items-center">
					<form action="#">
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="w-[468px] h-[43px] border border-[#D6E8EE] rounded-sm p-2.5	"
						/>
						<button
							type="submit"
							className="w-full text-sm leading-4.5 text-white bg-[#1E84C3] rounded-sm py-3 px-2.5"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
