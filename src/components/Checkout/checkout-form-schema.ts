import { z } from 'zod';
export const checkoutGuestFormSchema = z.object({
	firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }),
	lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2 символов' }),
	email: z.string().email({ message: 'Введите корректную почту' }),
	phone: z.string().min(10, { message: 'Телефон должен содержать не менее 10 символов' }),
	address: z.string().min(5, { message: 'Введите корректный адрес доставки' }),
	comment: z.string().optional(),
	payment: z.string().optional(),
	userId: z.number().optional(),
});

export const checkoutFormSchema = z.object({
	email: z.string().email({ message: 'Введите корректную почту' }),
	password: z.string().min(6, { message: 'Пароль должен содержать не менее 6 символов' }),
});

export type CheckoutGuestFormValues = z.infer<typeof checkoutGuestFormSchema>;
export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
