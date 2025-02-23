import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
	CheckoutFormValues,
	checkoutFormSchema,
} from '../components/Checkout/checkout-form-schema';
import { CheckoutBasket } from '../components/Checkout/CheckoutBasket';
import { CheckoutPayment } from '../components/Checkout/CheckoutPayment';
import { CheckoutPersonal } from '../components/Checkout/CheckoutPersonal';
import { CheckoutReceiver } from '../components/Checkout/CheckoutReceiver';
import { CheckoutDelivery } from '../components/Checkout/delivery/CheckoutDelivery';
import { GuestTab } from '../components/Checkout/GuestTab';
import { LoginTab } from '../components/Checkout/LoginTab';
import { Container } from '../components/Container/Container';
import Layout from '../components/Layout/Layout';

const OrderPage = () => {
	const [activeTab, setActiveTab] = useState<string>('login');
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const tabClass =
		'p-2.5 w-full font-medium text-2xl leading-8 text-[#0D0C0C] border-r border-b border-r-[#D6E8EE] border-b-[#D6E8EE] cursor-pointer';

	const activeTabClass = '!border-r-[#018ABE] !border-b-[#018ABE]';

	const handleActiveTab = (tab: string): void => {
		setActiveTab(tab);
	};

	const handleLogin = () => {
		setIsAuthenticated(true);
	};

	const [submitting, setSubmitting] = React.useState(false);
	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<CheckoutFormValues> = async data => {
		try {
			setSubmitting(true);
			handleLogin();
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		}
	};

	const formRef = useRef<HTMLFormElement>(null);

	const triggerFormSubmit = () => {
		if (formRef.current) {
			formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
		}
	};

	return (
		<Layout>
			<Container>
				<div className="font-medium text-2xl leading-6 text-center mb-10">Placing an order</div>
			</Container>
			<Container>
				<div className="flex gap-10">
					<div className="w-3/5">
						<FormProvider {...form}>
							<form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
								<ul className="flex gap-10 justify-between !mb-10">
									<li
										onClick={() => handleActiveTab('login')}
										className={`${tabClass} ${activeTab === 'login' ? activeTabClass : ''}`}
									>
										Log in as a client
									</li>
									{!isAuthenticated && (
										<li
											onClick={() => handleActiveTab('guest')}
											className={`${tabClass} ${activeTab === 'guest' ? activeTabClass : ''}`}
										>
											Check in as a guest
										</li>
									)}
								</ul>
								{activeTab === 'login' && (
									<>
										{!isAuthenticated && <LoginTab />}
										{isAuthenticated && (
											<>
												<CheckoutPersonal />
												<CheckoutDelivery />
												<CheckoutPayment />
												<CheckoutReceiver />
											</>
										)}
									</>
								)}
								{activeTab === 'guest' && <GuestTab />}
							</form>
						</FormProvider>
					</div>
					<div className="w-2/5">
						<CheckoutBasket triggerFormSubmit={triggerFormSubmit} />
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default OrderPage;
