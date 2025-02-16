import clsx from 'clsx';
import React from 'react';
import Button from '../Button';
import SizeComponent from '../SizeComponent';
import MetalColorSwitcher from './MetalColorSwitcher';

interface Product {
	id: number;
	path: string;
	img: string;
	title: string;
	desc: string;
	sku: number;
	material: string[];
	size: Record<number, boolean>;
	old_price?: number;
	price: number;
}

interface Props {
	product: Product;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
	const { img, title, desc, sku, material, size, old_price, price } = product;

	return (
		<div className="flex flex-col gap-5 w-[372px] justify-between">
			<div className="flex flex-col gap-2 ">
				<h1 className="text-2xl font-medium leading-8">{title}</h1>
				<p className="text-[18px] font-light leading-6">{desc}</p>
				<p className="text-[18px] font-light leading-6">{`SKU: ${sku}`}</p>
			</div>

			<MetalColorSwitcher material={material} />

			<SizeComponent items={size} />

			<div>
				{old_price ? (
					<>
						<span className="text-[16px] font-normal line-through mr-2.5">${old_price}</span>
						<span className="text-lg font-normal text-red-400 leading-6">${price}</span>
					</>
				) : (
					<span className="text-lg font-normal text-[#0D0C0C] leading-6">${price}</span>
				)}
			</div>

			<Button type="button" variant="primary">
				Add to bag
			</Button>

			<Button type="button" variant="secondary">
				Add to favorites
			</Button>
		</div>
	);
};

export default ProductInfo;
