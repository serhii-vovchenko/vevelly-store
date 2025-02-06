import clsx from 'clsx';
import React from 'react';
import s from './Container.module.css';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
	return <div className={clsx(s.container, className)}>{children}</div>;
};
