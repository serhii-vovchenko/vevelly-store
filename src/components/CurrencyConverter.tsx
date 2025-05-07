import { useEffect, useState } from 'react';

export const useCurrencyConverter = () => {
	const lang = localStorage.getItem('language') || 'ua';
	const [exchangeRate, setExchangeRate] = useState<number | null>(null);

	useEffect(() => {
		fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json')
			.then(res => res.json())
			.then(data => setExchangeRate(data[0]?.rate || 41.5))
			.catch(() => setExchangeRate(41.5));
	}, []);

	const cur_conv = (price: string | number) => {
		const numPrice = typeof price === 'string' ? parseFloat(price) : price;
		const converted =
			lang === 'en' && exchangeRate ? (numPrice / exchangeRate).toFixed(2) : numPrice.toFixed(2);
		const currency = lang === 'en' ? '$' : '₴';
		return `${currency} ${converted}`;
	};

	return { cur_conv };
};
