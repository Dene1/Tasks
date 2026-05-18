import type {ChangeEvent} from 'react'

type ChekboxProps = {
	selected?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
	                         selected = false,
	                         onChange
                         }: ChekboxProps) => {
	return <input
		type="checkbox"
		checked={selected}
		onChange={onChange}
	/>
}