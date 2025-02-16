import React, { useState } from 'react';
import arrowDown from '../../assets/arrow-down.svg';

interface Props {
	material: string[];
}

const MetalColorSwitcher: React.FC<Props> = ({ material }) => {
	const [selected, setSelected] = useState(material[0]);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex gap-2.5 items-center">
			<p className="text-lg font-medium leading-6 text-[#0D0C0C]">Metal color:</p>

			<div className="relative w-28">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full outline-none flex items-center gap-2.5"
				>
					<span className="text-lg text-[#0D0C0C] font-normal leading-6">{selected}</span>
					<span className="flex items-center">
						<img src={arrowDown} alt="Arrow Down" className="w-6 h-6" />
					</span>
				</button>

				{isOpen && (
					<ul className="absolute top-full w-full  bg-white border border-gray-300 rounded-md shadow-lg z-10">
						{material.map(option => (
							<li
								key={option}
								className="p-1 text-[#0D0C0C] text-sm hover:bg-gray-200 cursor-pointer"
								onClick={() => {
									setSelected(option);
									setIsOpen(false);
								}}
							>
								{option}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MetalColorSwitcher;
