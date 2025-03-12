import React, { useState } from 'react';

interface Props {
	gallery: string[];
}

const ProductGallery: React.FC<Props> = ({ gallery }) => {
	const [currentImage, setCurrentImage] = useState<string>(gallery.length ? gallery[0] : '');

	const handleCurrentImage = (image: string): void => {
		setCurrentImage(image);
	};

	return (
		<div className="w-[683px] h-[424px] flex gap-5">
			<ul className="flex flex-col gap-5 overflow-y-auto scrollbar-hide">
				{gallery.map(img => {
					return (
						<li
							key={img}
							onClick={() => handleCurrentImage(img)}
							className="w-[167px] h-[128px] flex flex-shrink-0 items-center justify-center border border-[#D6E8EE] overflow-hidden cursor-pointer"
						>
							<img
								src={img}
								alt={img}
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
					src={currentImage}
					alt={currentImage}
					width="496"
					height="424"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default ProductGallery;
