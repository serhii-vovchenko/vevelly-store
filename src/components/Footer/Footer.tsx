import { Container } from '../Container/Container';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { footer as t } from '../../translations/translations';

const Footer = () => {
	const lang = useSelector(selectLanguage);

	return (
		<footer className="bg-[#d6e8ee]">
			<Container>
				<div className="flex justify-around py-[100px]">
					<div className="flex flex-col items-center">
						<div className="footer_logo text-[40px] leading-[52px]">VEVELLY</div>
						<div className="lang pt-5">
							<LanguageSwitcher />
						</div>
					</div>
					<div className="flex gap-14">
						<div className="flex flex-col">
							<div className="text-[28px] font-bold leading-8 text-[#0D0C0C] mb-4">
								{t.info[lang]}
							</div>
							<div className="text-lg font-light leading-6 text-[#0d0c0c]">
								<ul className="flex flex-col gap-2.5">
									<li className="py-1">
										<a href="#">{t.paymentAndDelivery[lang]}</a>
									</li>
									<li className="py-1">
										<a href="#">{t.exchangeAndReturn[lang]}</a>
									</li>
									<li className="py-1">
										<a href="#">{t.careRecommendation[lang]}</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col gap-2.5">
							<div className="text-[28px] font-bold leading-8 text-[#0D0C0C] mb-4">
								{t.contacts[lang]}
							</div>
							<div className="text-lg font-light leading-6 text-[#0d0c0c]">
								<ul>
									<li className="py-1">0-800-603-897</li>
									<li className="py-1">+38 067 747 01 45</li>
									<li className="py-1">vevelly@gmail.com</li>
									<li className="py-1">{t.weekDay[lang]}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
