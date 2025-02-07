import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Callback } from './Callback';

interface Props {
	className?: string;
}

export const Topline: React.FC<Props> = ({ className }) => {
	const [isOpenCall, setIsOpenCall] = useState(false);

	const handlerCall = () => {
		setIsOpenCall(!isOpenCall);
	};
	return (
		<div className={clsx('flex items-center h-[60px] bg-[#d6e8ee]', className)}>
			<Container>
				<div className="flex items-center justify-between">
					<div>
						<ul className="flex gap-5">
							<li>
								<NavLink className="border-b-[1px] border-[#018ABE]" to="#">
									Payment and delivery
								</NavLink>
							</li>
							<li>
								<NavLink to="#">Exchange and return</NavLink>
							</li>
						</ul>
					</div>
					<div className="flex items-center justify-between gap-5">
						<div>
							<LanguageSwitcher />
						</div>
						<div className="flex items-center justify-between text-lg leading-6 text-[#0d0c0c] relative">
							0-800-603-897
							<span
								onClick={() => {
									handlerCall();
								}}
							>
								<Icon
									className={clsx(isOpenCall && 'rotate-180', 'ml-[10px]')}
									name="down"
									width={18}
									height={9}
								/>
							</span>
							{isOpenCall && <Callback />}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
