import Button from '../Button';
import SizeComponent from '../SizeComponent';
import MetalColorSwitcher from './MetalColorSwitcher';
import { useSelector } from 'react-redux';
import {
	currentSizeSelector,
	productSelector,
	subproductsSelector,
} from '../../redux/product/selectors';

const ProductInfo = () => {
	const product = useSelector(productSelector);
	const subproducts = useSelector(subproductsSelector);
	const currentSize = useSelector(currentSizeSelector);

	return (
		<div className="flex flex-col gap-5 justify-between">
			<div className="flex flex-col gap-2 ">
				<h1 className="!text-3xl font-medium leading-8 w-full">{product?.name}</h1>
				<p className="text-[18px] font-light leading-6">{product?.design}</p>
				<p className="text-[18px] font-light leading-6">{`SKU: ${product?.sku}`}</p>
			</div>
			<MetalColorSwitcher />
			<SizeComponent />
			<div>
				{subproducts && subproducts[currentSize]?.old_price ? (
					<>
						<span className="text-[16px] font-normal line-through mr-2.5">
							${subproducts && subproducts[currentSize]?.old_price}
						</span>
						<span className="text-lg font-normal text-red-400 leading-6">
							${subproducts && subproducts[currentSize]?.new_price}
						</span>
					</>
				) : (
					<span className="text-lg font-normal text-[#0D0C0C] leading-6">
						${subproducts && subproducts[currentSize]?.price}
					</span>
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
