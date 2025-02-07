import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface Props {
	className?: string;
}

export const Topline: React.FC<Props> = ({ className }) => {
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
						<div className="flex items-center justify-between text-lg leading-6 text-[#0d0c0c] ">
							0-800-603-897
							<Icon className="ml-[10px]" name="down" width={18} height={9} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
