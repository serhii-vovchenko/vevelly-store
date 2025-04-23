import Button from './Button';
import { useSelector } from 'react-redux';
import { currentSizeSelector, subproductsSelector } from '../redux/product/selectors';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { handleCurrentSize } from '../redux/product/slice';
import { selectLanguage } from '../redux/language/selectors';
import { productInfo as t } from '../translations/translations';

const SizeComponent = () => {
	const subproducts = useSelector(subproductsSelector);
	const currentSize = useSelector(currentSizeSelector);
	const lang = useSelector(selectLanguage);
	const dispatch: AppDispatch = useDispatch();

	const allSizes = subproducts?.map(item => {
		return item.length;
	});

	const handleSize = (index: number): void => {
		dispatch(handleCurrentSize(index));
	};

	return (
		<div className="w-[372px]">
			<p className="text-lg text-[#0D0C0C] font-medium leading-6">{t.size[lang]}</p>
			<div className="flex gap-3 flex-wrap mt-2.5">
				{allSizes?.map((item, index) => {
					// const outOfStock = !items[item] ? 'text-[#C0C0C0] !cursor-not-allowed' : '';
					const isActive = currentSize === index ? '!border-[#018ABE]' : '';

					return (
						<Button
							type="button"
							onClick={() => handleSize(index)}
							variant="size"
							key={index}
							className={`${isActive}`}
							// className={`${outOfStock} ${isActive}`}
							// disabled={!items[item]}
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
