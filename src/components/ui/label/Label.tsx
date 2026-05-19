import {Checkbox} from '../index'
import './label.css'

interface Todo {
	id: string
	title: string
	isSelected: boolean
	isCompleted: boolean
}

interface LabelProps {
	item: Todo
	toggleTodoSelection: (id: string) => void
}

export const Label = ({item, toggleTodoSelection}: LabelProps) => {

	return <label>
		<Checkbox selected={item.isSelected}
		          onChange={() => toggleTodoSelection(item.id)}
		/>
		{item.isCompleted ?
			<span className="crossed">{item.title}</span> :
			<span>{item.title}</span>}
	</label>
}