export const FullPromo = () => {
	return (
		<div className="full_promo mb-30">
			<div className="wrap relative h-[400px] overflow-hidden">
				<img
					className="w-screen rotate-y-180 grayscale-100 object-cover"
					src="/full_promo.png"
					alt="promo"
				/>
				<div className="wrap_text"></div>
				<div className="full_promo_text w-[430px] text-[38px] uppercase font-normal leading-12.5 text-white absolute bottom-5 right-5">
					Order the perfect Valentine’s Day gift today, make it unforgettable!
				</div>
			</div>
		</div>
	);
};
