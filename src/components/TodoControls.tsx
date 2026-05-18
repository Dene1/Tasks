import {Button} from './ui'
import {useItemsContext} from '../context/ItemsContext.tsx'


export const TodoControls = () => {
	const {dispatch} = useItemsContext()
	const selectAllTodos = () => dispatch({type: 'SELECT_ALL_TODOS'})
	const deselectAllTodos = () => dispatch({type: 'DESELECT_ALL_TODOS'})

	return (
		<div className="functions">
			<Button label="Выбрать все"
			        variant="select"
			        onClick={selectAllTodos} />
			<Button label="Снять выделение"
			        variant="select"
			        onClick={deselectAllTodos} />
		</div>
	)
}