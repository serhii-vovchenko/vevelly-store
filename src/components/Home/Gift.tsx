import { Container } from '../Container/Container';

export const Gift = () => {
	return (
		<div className="gift mb-30">
			<Container>
				<div className="flex justify-between items-center gap-5">
					<div className="flex-1">
						<img src="/gift.png" alt="gift" />
					</div>
					<div className="flex-1 p-5 pt-0">
						<div className="gift_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C]">
							NOT SURE WHAT TO GIFT?
						</div>
						<div className="text-lg leading-6">
							<p className="pb-5">
								The VEVELLY Gift Card is the perfect choice for any occasion! Let your loved ones
								pick the jewelry that matches their style and becomes a part of their unforgettable
								memories.
							</p>
						</div>
						<div className="text-right text-lg leading-6">
							<a href="#">Read more</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
