import type {Action} from './reducer.ts'

interface TodoControlsProps {
	dispatch: React.Dispatch<Action>
}

export const TodoControls = ({dispatch}: TodoControlsProps) => {
	const selectAllTodos = () => dispatch({type: 'SELECT_ALL_TODOS'})
	const deselectAllTodos = () => dispatch({type: 'DESELECT_ALL_TODOS'})

	return (
		<div className="functions">
			<button type="button"
			        className="counter"
			        onClick={selectAllTodos}>
				Выбрать все
			</button>
			<button type="button"
			        className="counter"
			        onClick={deselectAllTodos}>
				Снять выделение
			</button>
		</div>
	)
}