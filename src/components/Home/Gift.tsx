import { Container } from '../Container/Container';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const Gift = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="gift mb-30">
			<Container>
				<div className="flex justify-between items-center gap-5">
					<div className="flex-1">
						<img src="/gift.png" alt="gift" />
					</div>
					<div className="flex-1 p-5 pt-0">
						<div className="gift_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C]">
							{t.giftTitle[lang]}
						</div>
						<div className="text-lg leading-6">
							<p className="pb-5">{t.giftText[lang]}</p>
						</div>
						<div className="text-right text-lg leading-6">
							<button className="text-sm leading-4.5 text-white bg-[#1E84C3] rounded-sm p-2.5 px-5">
								{t.giftButton[lang]}
							</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
