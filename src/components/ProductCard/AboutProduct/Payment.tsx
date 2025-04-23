import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/selectors';
import { returnAndPayment as t } from '../../../translations/translations';

const Payment = () => {
	const lang = useSelector(selectLanguage);
	const subtitleStyle = 'text-lg text-[#0D0C0C] font-medium leading-6 !mb-0.5';
	const textStile = 'text-lg text-[#0D0C0C] font-thin leading-6 text-justify ';

	return (
		<div className="flex gap-15 ">
			<div>
				<h3 className={subtitleStyle}>{`${t.policyTitle[lang]}:`}</h3>

				<ul className="w-[464px] !list-disc !pl-6 flex flex-col gap-1">
					<li className={textStile}>{t.firstPolicyRow[lang]}</li>
					<li className={textStile}>{t.secondPolicyRow[lang]}</li>
					<li className={textStile}>{t.lastPolicyRow[lang]}</li>
				</ul>
			</div>

			<ul className="flex flex-col gap-4 justify-between">
				<li>
					<h4 className={subtitleStyle}>{t.firstPaymentTitle[lang]}</h4>
					<p className={textStile}>{t.firstPaymentDescription[lang]}</p>
				</li>

				<li>
					<h4 className={subtitleStyle}>{t.secondPaymentTitle[lang]}</h4>
					<p className={textStile}>{t.secondPaymentDescription[lang]}</p>
				</li>

				<li>
					<h4 className={subtitleStyle}>{t.lastPaymentTitle[lang]}</h4>
					<p className={textStile}>{t.lastPaymentDescription[lang]}</p>
				</li>
			</ul>
		</div>
	);
};

export default Payment;
