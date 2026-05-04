import type {Action} from './reducer.ts'

interface SelectedActionsProps {
	dispatch: React.Dispatch<Action>;
}

export const SelectedActions = ({dispatch}: SelectedActionsProps) => {
	const markSelectedAsDone = () => dispatch({type: 'MARK_SELECTED_AS_DONE'})

	const deleteAllSelectedTodos = () => {
		if (confirm('Are you sure you want to delete all selected todos?')) {
			dispatch({type: 'DELETE_SELECTED_TODOS'})
		}
	}

	return (
		<div className="functions">
			<button type="button"
			        className="zel"
			        onClick={markSelectedAsDone}>
				Сделать выполненными
			</button>
			<button type="button"
			        className="deleteButton"
			        onClick={deleteAllSelectedTodos}>
				Удалить выбранные
			</button>
		</div>
	)
}