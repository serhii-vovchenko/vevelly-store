import React, { useState } from 'react';
import Button from './Button';

interface Props {
	items: Record<string, boolean>;
}

const SizeComponent: React.FC<Props> = ({ items }) => {
	const allSize = Object.keys(items).toSorted();
	const [currentSize, setCurrentSize] = useState<string>(allSize.length ? allSize[0] : '');

	const handleClickSize = (size: string): void => {
		setCurrentSize(size);
	};

	return (
		<div>
			<p className="text-lg text-[#0D0C0C] font-medium leading-6">Size</p>
			<div className="flex gap-3 flex-wrap mt-2.5">
				{allSize.map(item => {
					const outOfStock = !items[item] ? 'text-[#C0C0C0] !cursor-not-allowed' : '';
					const isActive = currentSize === item ? '!border-[#018ABE]' : '';

					return (
						<Button
							type="button"
							onClick={() => handleClickSize(item)}
							variant="size"
							key={item}
							className={`${outOfStock} ${isActive}`}
							disabled={!items[item]}
						>
							{item}
						</Button>
					);
				})}
			</div>
		</div>
	);
};
export default SizeComponent;
