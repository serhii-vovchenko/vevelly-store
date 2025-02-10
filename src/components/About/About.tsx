import { Container } from '../Container/Container';

export const About = () => {
	return (
		<Container>
			<div className="about mb-30">
				<div className="flex justify-between gap-5">
					<div className="about_text flex-1 p-5 pt-0 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[1px] before:h-60 before:bg-[#018ABE]">
						<div className="about_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C] before:content-[''] before:absolute before:left-0 before:top-0 before:w-60 before:h-[1px] before:bg-[#018ABE]">
							ABOUT BRAND
						</div>
						<div className="text-lg leading-6 [&>p]:pb-5">
							<p>
								VEVELLY is the embodiment of sophistication, elegance and individuality. Each of our
								jewelry is created with love and attention to detail to emphasize your uniqueness
								and become part of your most vivid moments.
							</p>

							<p>
								We offer collections in which modern design and timeless classics are harmoniously
								combined. From elegant rings and pendants to stylish earrings and bracelets — every
								item in VEVELLY reflects high quality, sophisticated taste and a desire for
								perfection.
							</p>
							<p>
								Our jewelry is created from precious metals and natural stones to give you not only
								beauty, but also confidence in every day. VEVELLY — these are not just accessories,
								they are symbols of your individuality that will stay with you for the rest of your
								life.
							</p>

							<p>Allow yourself the luxury of being yourself with VEVELLY.</p>
						</div>
						<div className="text-right text-lg leading-6">
							<a href="#">Read more</a>
						</div>
					</div>
					<div className="flex-1">
						<img src="/about.png" alt="about" />
					</div>
				</div>
			</div>
		</Container>
	);
};
