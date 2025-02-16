import React from 'react';
import { Link, useLocation } from 'react-router-dom'

interface Props {
	className?: string;
}

const Breadcrumbs: React.FC<Props> = ({ className }) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(path => path);

	return (
		<nav className={className}>
			<ul className="flex gap-2 text-sm text-[#434141]">
				<li>
					<Link to="/">Main page</Link>
				</li>
				{pathnames.map((value, index) => {
					const path = `/${pathnames.slice(0, index + 1).join('/')}`;
					return (
						<li key={path}>
							<span> / </span>
							<Link to={path}>{value}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Breadcrumbs;
