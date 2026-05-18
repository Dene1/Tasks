import './button.css'

export interface ButtonProps {
	variant?: 'default' | 'delete' | 'red' | 'green' | 'add' | 'move' | 'select';
	label: string;
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({
	                       variant = 'default',
	                       label,
	                       disabled = false,
	                       ...props
                       }: ButtonProps) => {
	return (
		<button
			type="button"
			className={`button--${variant}`}
			disabled={disabled}
			{...props}
		>
			{label}
		</button>
	)
}