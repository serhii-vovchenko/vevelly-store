import { z } from 'zod';

export const checkoutFormSchema = z.object({
	firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
	lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
	email: z.string().email({ message: 'Invalid email format' }).optional(),
	phone: z
		.string()
		.min(10, { message: 'Phone number must be at least 10 characters long' })
		.optional(),
	city: z.string().nonempty({ message: 'Select a city' }),
	deliveryMethod: z.string().nonempty({ message: 'Select a delivery method' }),
	receiver: z.string().nonempty({ message: 'Select a receiver' }),
	shop: z.string().optional(),
	post: z.string().optional(),
	delivery_street: z.string().optional(),
	delivery_house: z.string().optional(),
	delivery_apartment: z.string().optional(),
	delivery_comment: z.string().optional(),
	receiver_name: z.string().optional(),
	receiver_subname: z.string().optional(),
	receiver_phone: z.string().optional(),
	payment: z.string().nonempty({ message: 'Select a payment method' }),
	userId: z.number().optional(),
});
export const loginSchema = z.object({
	login_email: z.string().email({ message: 'Invalid email format' }),
	login_password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});
export type LoginValues = z.infer<typeof loginSchema>;
export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
