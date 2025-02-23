import { z } from 'zod';

export const checkoutFormSchema = z.object({
	firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
	lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
	email: z.string().email({ message: 'Enter a valid email' }),
	phone: z.string().min(10, { message: 'Phone number must be at least 10 characters long' }),
	address: z.string().min(5, { message: 'Enter a valid delivery address' }),
	city: z.string().nonempty({ message: 'Select a city' }),
	deliveryMethod: z.string().nonempty({ message: 'Select a delivery method' }),
	receiver: z.string().nonempty({ message: 'Select a receiver' }),
	shop: z.string().optional(),
	post: z.string().optional(),
	street: z.string().optional(),
	house: z.string().optional(),
	apartment: z.string().optional(),
	comment: z.string().optional(),
	payment: z.string().nonempty({ message: 'Select a payment method' }),
	userId: z.number().optional(),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters long' })
		.optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
