import clsx from 'clsx';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
export type IBanner = {
	title: string;
	color?: string;
	text_color?: string;
	img: string;
};
interface Props {
	banner: IBanner[];
}

export const MySlider: React.FC<Props> = ({ banner }) => {
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: false,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="slider mb-30">
			<div className="relative w-screen h-screen overflow-hidden">
				<AnySlider {...settings}>
					{banner.map((item, index) => (
						<div key={index} className="relative w-full h-screen flex items-center justify-center">
							<div className="absolute top-0 right-0 w-[94%] h-[1px]  bg-[#99cadd]"></div>
							<div
								className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex h-3/5 z-10 items-center justify-between"
								style={{ backgroundColor: item.color || 'transparent' }}
							></div>

							<div className="relative  flex h-full max-w-[1320px] m-auto px-4 items-center justify-between">
								<div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-[1px] h-full z-1 bg-[#99cadd]"></div>
								<div className="relative z-10 w-1/2 flex items-center justify-center p-10">
									<h2
										className={clsx(
											'text-[46px] uppercase font-normal leading-[1.5] text-center',
											item.text_color ? `text-[${item.text_color}]` : 'text-white'
										)}
									>
										{item.title}
									</h2>
								</div>

								<div className="w-1/2 z-10">
									<img className="w-full h-full object-cover" src={item.img} alt="slider" />
								</div>
							</div>
							<div className="absolute -bottom-1 right-1/2 mr-8 text-blue-900 text-base font-bold">
								{String(index + 1).padStart(2, '0')}
							</div>
							<div className="absolute bottom-0 left-22 w-[38%] h-[1px] bg-[#99cadd]"></div>
						</div>
					))}
				</AnySlider>
			</div>
		</div>
	);
};
