import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
	checkoutFormSchema,
	CheckoutFormValues,
	loginSchema,
} from '../components/Checkout/checkout-form-schema';
import { CheckoutBasket } from '../components/Checkout/CheckoutBasket';
import { GuestTab } from '../components/Checkout/GuestTab';
import { LoginTab } from '../components/Checkout/LoginTab';
import { Container } from '../components/Container/Container';
import Layout from '../components/Layout/Layout';

const OrderPage = () => {
	const [activeTab, setActiveTab] = useState<'login' | 'guest'>('login');
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [submittingCheckout, setSubmittingCheckout] = useState(false);

	const tabClass =
		'p-2.5 w-full font-medium text-2xl leading-8 text-[#0D0C0C] border-r border-b border-r-[#D6E8EE] border-b-[#D6E8EE] cursor-pointer';

	const activeTabClass = '!border-r-[#018ABE] !border-b-[#018ABE]';

	const handleActiveTab = (tab: 'login' | 'guest'): void => {
		setActiveTab(tab);
	};
	const handleLogin = (data: any) => {
		console.log('Login data', data);
		setIsAuthenticated(true);
		setActiveTab('guest');
	};

	const loginForm = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			login_email: '',
			login_password: '',
		},
	});
	const checkoutForm = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			address: '',
			receiver: '',
			city: '',
			deliveryMethod: '',
			shop: '',
			post: '',
			street: '',
			house: '',
			apartment: '',
			comment: '',
			payment: '',
			password: '',
		},
	});
	const { handleSubmit } = checkoutForm;

	const onSubmitLogin = (data: any) => {
		console.log('Login data', data);
		setIsAuthenticated(true);
		setActiveTab('guest');
	};

	const onSubmitCheckout: SubmitHandler<CheckoutFormValues> = async data => {
		try {
			setSubmittingCheckout(true);
			console.log('Form submitted successfully:', data);
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmittingCheckout(false);
		}
	};

	const handleFormSubmit = () => {
		console.log('handleFormSubmit called');
		handleSubmit(onSubmitCheckout)();
	};

	return (
		<Layout>
			<Container>
				<div className="font-medium text-2xl leading-6 text-center mb-10">Placing an order</div>
			</Container>
			<Container>
				<div className="flex gap-10">
					<div className="w-3/5">
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

						<FormProvider {...loginForm}>
							{activeTab === 'login' && (
								<form onSubmit={loginForm.handleSubmit(onSubmitLogin)}>
									<LoginTab onLogin={handleLogin} isAuthenticated={isAuthenticated} />
								</form>
							)}
						</FormProvider>

						<FormProvider {...checkoutForm}>
							{activeTab === 'guest' && (
								<form onSubmit={handleSubmit(onSubmitCheckout)}>
									<GuestTab isAuthenticated={isAuthenticated} />
								</form>
							)}
						</FormProvider>
					</div>
					<div className="w-2/5">
						<CheckoutBasket onFormSubmit={handleFormSubmit} submitting={submittingCheckout} />
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default OrderPage;
