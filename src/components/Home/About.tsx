import { Container } from '../Container/Container';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const About = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="about mb-30">
			<Container>
				<div className="flex justify-between gap-5">
					<div className="about_text flex-1 p-5 pt-0 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[1px] before:h-60 before:bg-[#018ABE]">
						<div className="about_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C] before:content-[''] before:absolute before:left-0 before:top-0 before:w-60 before:h-[1px] before:bg-[#018ABE]">
							{t.aboutTitle[lang]}
						</div>
						<div className="text-lg leading-6 [&>p]:pb-5">
							<p>{t.aboutText.text1[lang]}</p>
							<p>{t.aboutText.text2[lang]}</p>
							<p>{t.aboutText.text3[lang]}</p>
							<p>{t.aboutText.text4[lang]}</p>
						</div>
						<div className="text-right text-lg leading-6">
							<a href="#">{t.readMore[lang]}</a>
						</div>
					</div>
					<div className="flex-1">
						<img src="/about.png" alt="about" />
					</div>
				</div>
			</Container>
		</div>
	);
};
