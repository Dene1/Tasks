import {useItemsContext} from '../context/ItemsContext.tsx'
import {Button} from './ui'

export const SelectedActions = () => {
	const {todos, dispatch} = useItemsContext()

	const hasSelectedTodos = todos.some(todo => todo.isSelected)
	const markSelectedAsDone = () => dispatch({type: 'MARK_SELECTED_AS_DONE'})
	const deleteAllSelectedTodos = () => {
		if (confirm('Are you sure you want to delete all selected todos?')) {
			dispatch({type: 'DELETE_SELECTED_TODOS'})
		}
	}

	return hasSelectedTodos ?
		<div className="functions">
			<Button label="Сделать выполненными"
			        variant="green"
			        onClick={markSelectedAsDone} />
			<Button label="Удалить выбранные"
			        variant="red"
			        onClick={deleteAllSelectedTodos} />
		</div> : null
}