import clsx from 'clsx';
import React from 'react';
import { Container } from '../Container/Container';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

interface Props {
	className?: string;
}

export const Subscribe: React.FC<Props> = ({ className }) => {
	const lang = useSelector(selectLanguage);

	return (
		<div className={clsx('mb-30', className)}>
			<Container>
				<div className="flex items-center justify-evenly py-10 gap-5">
					<div className="w-1/2 subscribe text-center text-[32px] uppercase font-medium leading-[42px] text-[#0D0C0C]">
						{t.discount[lang]}
					</div>
					<div className="flex flex-col items-center w-[470px] px-auto">
						<form action="#">
							<input
								type="email"
								name="email"
								placeholder={t.email[lang]}
								className="w-[468px] h-[43px] border border-[#D6E8EE] rounded-sm p-2.5	"
							/>
							<button
								type="submit"
								className="w-full text-sm leading-4.5 text-white bg-[#1E84C3] rounded-sm py-3 px-2.5"
							>
								{t.subscribe[lang]}
							</button>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};
