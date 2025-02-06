import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import downIcon from '../../assets/img/down.svg';
import { Container } from '../Container/Container';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import s from './Topline.module.css';

interface Props {
	className?: string;
}

export const Topline: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(s.topline, className)}>
			<Container>
				<div className={s.topline__wrap}>
					<div className={s.topline__nav}>
						<ul className={s.topline__list}>
							<li className={s.topline__item}>
								<NavLink to="#" className={s.topline__link}>
									Payment and delivery
								</NavLink>
							</li>
							<li className={s.topline__item}>
								<NavLink to="#" className={s.topline__link}>
									Exchange and return
								</NavLink>
							</li>
						</ul>
					</div>
					<div className={s.topline__right}>
						<div className={s.topline__lang}>
							<LanguageSwitcher />
						</div>
						<div className={s.topline__contacts}>
							0-800-603-897
							<img src={downIcon} alt="dropdown" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
