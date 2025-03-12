import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface Props {
	className?: string;
	contentClassName?: string;
	title?: string;
	endAdornment?: React.ReactNode;
}

export const WhiteBlock: React.FC<PropsWithChildren<Props>> = ({
	title,
	endAdornment,
	contentClassName,
	className,
	children,
}) => {
	return (
		<div className={clsx('relative bg-white border border-[#f5f5f5] mb-10', className)}>
			{title && (
				<div className="absolute top-0 left-4 transform -translate-y-1/2 z-10 bg-white flex items-center justify-between px-1">
					<div className="font-bold">{title}</div>
					{endAdornment}
				</div>
			)}
			<div className={clsx('px-5 py-10 ', contentClassName)}>{children}</div>
		</div>
	);
};
