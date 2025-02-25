import React from 'react'
import { useFormContext } from 'react-hook-form'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}
export const FormTextarea: React.FC<Props> = ({
	className,
	name,
	label,
	clearButton=true,
	required,
	...props
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const errorText = errors[name]?.message as string
	return (
		<div className={className}>
			{label && (
				<p className="font-medium mb-2">
					{label} {required && <span className="text-red-500">*</span>}
				</p>
			)}

			<div className="relative">
				<textarea className="h-10 text-md" {...register(name)} {...props} />
			</div>
			{errorText && (<p className='text-red-500 text-sm mt-2'>{errorText}</p>)}
		</div>
	)
}
