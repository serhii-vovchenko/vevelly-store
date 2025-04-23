import React from 'react';
import { useSelector } from 'react-redux';
import {
	currentMetalColorSelector,
	currentSizeSelector,
	materialsSelector,
	productSelector,
	subproductsSelector,
} from '../../../redux/product/selectors';
import { selectLanguage } from '../../../redux/language/selectors';
import { aboutProduct as t } from '../../../translations/translations';

const Description = () => {
	const product = useSelector(productSelector);
	const subproducts = useSelector(subproductsSelector);
	const materials = useSelector(materialsSelector);
	const currentMetalColor = useSelector(currentMetalColorSelector);
	const currentSize = useSelector(currentSizeSelector);
	const lang = useSelector(selectLanguage);

	return (
		<div className="flex gap-15">
			<ul className="w-[464px] flex flex-col gap-2.5 flex-shrink-0">
				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.metal[lang]}:`}</p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.material}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.color[lang]}:`}</p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.color}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.fineness[lang]}:`}</p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.assay}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.style[lang]}:`}</p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.label}
					</p>
				</li>

				<li className="flex gap-2.5 items-start">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.size[lang]}:`}</p>
					<ul className="flex flex-col gap-1.5 ">
						<li className="flex gap-2.5 aline-center">
							<p className="w-32 capitalize text-lg font-light leading-6">{`${t.sizes[lang]}:`}</p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.size}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-32 capitalize text-lg font-light leading-6">{`${t.length[lang]}:`}</p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.length}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-32 capitalize text-lg font-light leading-6">{`${t.maxLength[lang]}:`}</p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.max_length}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-32 capitalize text-lg font-light leading-6">{`${t.weight[lang]}:`}</p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.weight}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-32 capitalize text-lg font-light leading-6">{`${t.width[lang]}:`}</p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.width}
							</p>
						</li>
					</ul>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">{`${t.stone[lang]}:`}</p>
					<p className="text-lg font-light leading-6">
						{product && product?.gemstone[0]?.gemstone}
					</p>
				</li>
			</ul>
			<div>
				<p className="text-lg font-normal leading-6 text-justify">
					{product && product?.description[0]?.text}
				</p>
			</div>
		</div>
	);
};

export default Description;
