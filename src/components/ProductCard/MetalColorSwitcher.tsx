import { useState } from 'react';
import arrowDown from '../../assets/icons/arrow-down.svg';
import { useSelector } from 'react-redux';
import { currentMetalColorSelector, materialsSelector } from '../../redux/product/selectors';
import { useDispatch } from 'react-redux';
import { handleCurrentMetalColor } from '../../redux/product/slice';
import { AppDispatch } from '../../redux/store';
import { selectLanguage } from '../../redux/language/selectors';
import { productInfo as t } from '../../translations/translations';

const MetalColorSwitcher = () => {
	const [isOpen, setIsOpen] = useState(false);
	const lang = useSelector(selectLanguage);
	const dispatch: AppDispatch = useDispatch();

	const materials = useSelector(materialsSelector);
	const currentMetalColor = useSelector(currentMetalColorSelector);

	const handleMaterialColor = (index: number): void => {
		dispatch(handleCurrentMetalColor(index));
	};

	return (
		<div className="flex gap-2.5 items-center">
			<p className="text-lg font-medium leading-6 text-[#0D0C0C]">{t.metalColor[lang]}:</p>

			<div className="relative w-28">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full outline-none flex items-center gap-2.5"
				>
					<span className="text-lg text-[#0D0C0C] font-normal leading-6">
						{materials && materials[currentMetalColor]?.material?.color}
					</span>
					<span className="flex items-center">
						<img src={arrowDown} alt="Arrow Down" className="w-6 h-6" />
					</span>
				</button>

				{isOpen && (
					<ul className="absolute top-full w-full  bg-white border border-gray-300 rounded-md shadow-lg z-10">
						{materials?.map((item, index) => (
							<li
								key={index}
								className="p-1 text-[#0D0C0C] text-sm hover:bg-gray-200 cursor-pointer"
								onClick={() => {
									handleMaterialColor(index);
									setIsOpen(false);
								}}
							>
								{item.material.color}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MetalColorSwitcher;
