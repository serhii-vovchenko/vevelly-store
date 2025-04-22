import { useState } from 'react';
import { useSelector } from 'react-redux';
import { imagesSelector } from '../../redux/product/selectors';

const ProductGallery = () => {
	const images = useSelector(imagesSelector);
	const [currentImage, setCurrentImage] = useState<number>(0);

	const handleCurrentImage = (index: number): void => {
		setCurrentImage(index);
	};

	return (
		<div className="w-[683px] h-[424px] flex gap-5">
			<ul className="flex flex-col gap-5 overflow-y-auto scrollbar-hide w-[167px]">
				{images?.map((item, index) => {
					return (
						<li
							key={index}
							onClick={() => handleCurrentImage(index)}
							className="w-[167px] h-[128px] flex flex-shrink-0 items-center justify-center border border-[#D6E8EE] overflow-hidden cursor-pointer"
						>
							<img
								src={item}
								alt={item}
								width="167"
								height="128"
								className="w-full h-full object-cover"
							/>
						</li>
					);
				})}
			</ul>
			<div className="w-[496px] h-[424px] border border-[#D6E8EE] overflow-hidden">
				<img
					src={images && images[currentImage]}
					alt={images && images[currentImage]}
					width="496"
					height="424"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default ProductGallery;
