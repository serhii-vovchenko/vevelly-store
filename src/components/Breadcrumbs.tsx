import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
	currentPage: string;
}

export const Breadcrumbs: React.FC<Props> = ({ currentPage }) => {
	return (
		<div className="mb-4">
			<span>
				<NavLink to="/">MainPage</NavLink>
			</span>
			<span> / </span>
			<span>{currentPage}</span>
		</div>
	);
};
