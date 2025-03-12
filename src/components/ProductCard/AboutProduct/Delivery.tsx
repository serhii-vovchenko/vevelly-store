import React from 'react';

const Delivery = () => {
	return (
		<div className="flex flex-col gap-5">
			<p className="text-lg text-[#0D0C0C] font-thin leading-6">
				Orders are delivered within 1-3 days
			</p>
			<div>
				<p className="text-lg text-[#0D0C0C] font-medium leading-6 !mb-0.5">
					Choose a convenient delivery method for you:
				</p>
				<ul className="!list-disc !pl-6">
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">
						Delivery to a Nova Poshta post office from $2,7
					</li>
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">
						Delivery to a Nova Poshta branch from $2,7
					</li>
					<li className="text-lg text-[#0D0C0C] font-thin leading-6">
						By courier service to a convenient address from $3,5
					</li>
				</ul>
			</div>
			<p className="text-lg text-[#0D0C0C] font-thin leading-6">
				Track your order anytime with the tracking link provided upon dispatch.
			</p>
		</div>
	);
};

export default Delivery;
