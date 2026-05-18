import type {ChangeEvent, Ref} from 'react'
import './input.css'


type InputProps = {
	minLength?: number;
	maxLength?: number;
	text: string;
	ref?: Ref<HTMLInputElement>;
	changeText?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

export const Input = ({
	                      minLength = 3,
	                      maxLength = 70,
	                      text,
	                      changeText,
	                      placeholder,
	                      ref
                      }: InputProps) => {
	return <input
		type="text"
		className="input"
		value={text}
		ref={ref}
		minLength={minLength}
		maxLength={maxLength}
		onChange={(e) => changeText?.(e)}
		placeholder={placeholder}
	/>
}