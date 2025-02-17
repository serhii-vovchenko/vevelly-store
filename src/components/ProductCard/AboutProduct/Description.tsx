import React from 'react';

interface DescriptionMoc {
	metal: string;
	color: string;
	fineness: string;
	style: string;
	size: {
		height: string;
		length: string;
		weight: string;
		thickness: string;
	};
	stone: string;
	text: string;
}

const descriptionMoc: DescriptionMoc = {
	metal: 'Gold',
	color: 'Yellow',
	fineness: '18K gold',
	style: 'Universal, round',
	size: {
		height: '2mm',
		length: '160-180mm (for size 17)',
		weight: '2,34 g',
		thickness: '1,77mm',
	},
	stone: 'Pearl',
	text: 'An elegant gold ring with two large, sparkling pearls is the embodiment of sophisticated style and sophistication. The ring is ideal for creating a delicate and feminine look, harmoniously complementing both everyday and evening wear. This jewelry will become a symbol of refined taste and will give a sense of uniqueness to each of its owners. An ideal choice as a gift or for special occasions.',
};

const Description = () => {
	const descKeys = Object.keys(descriptionMoc) as (keyof DescriptionMoc)[];

	return (
		<div className="flex gap-15">
			<ul className="w-[464px] flex flex-col gap-2.5 flex-shrink-0">
				{descKeys.map(key => {
					if (key === 'text') {
						return;
					}

					if (key === 'size') {
						const sizeKeys = Object.keys(
							descriptionMoc.size
						) as (keyof typeof descriptionMoc.size)[];
						return (
							<li key={key} className="flex gap-2.5">
								<p className="w-22 text-lg font-medium leading-6 capitalize">{key}:</p>
								<ul className="flex flex-col gap-1.5 ">
									{sizeKeys.map(sizeKey => (
										<li key={sizeKey} className="flex gap-2.5 aline-center">
											<p className="w-22 capitalize text-lg font-light leading-6">{sizeKey}: </p>
											<p className="text-lg font-light leading-6">{descriptionMoc.size[sizeKey]}</p>
										</li>
									))}
								</ul>
							</li>
						);
					}

					return (
						<li key={key} className="flex gap-2.5 items-center">
							<p className="w-22 text-lg font-medium leading-6 capitalize">{key}:</p>
							<p className="text-lg font-light leading-6">{descriptionMoc[key]}</p>
						</li>
					);
				})}
			</ul>
			<div>
				<p className="text-lg font-normal leading-6 text-justify">{descriptionMoc.text}</p>
			</div>
		</div>
	);
};

export default Description;
