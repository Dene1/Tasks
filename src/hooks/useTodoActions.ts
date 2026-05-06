import {useCallback} from 'react'

export const useTodoActions = (dispatch: React.Dispatch<any>) => {
	const toggleTodoSelection = useCallback((id: string) =>
		dispatch({type: 'TOGGLE_SELECT_TODO', payload: id}), [dispatch])

	const toggleTodoCompletion = useCallback((id: string) =>
		dispatch({type: 'TOGGLE_COMPLETE_TODO', payload: id}), [dispatch])

	const deleteTodo = useCallback((id: string, title: string) => {
		if (confirm(`Are you sure you want to delete "${title}"?`)) {
			dispatch({type: 'DELETE_TODO', payload: id})
		}
	}, [dispatch])

	const moveUp = useCallback((index: number) =>
		dispatch({type: 'MOVE_UP', payload: index}), [dispatch])

	const moveDown = useCallback((index: number) =>
		dispatch({type: 'MOVE_DOWN', payload: index}), [dispatch])

	return {toggleTodoSelection, toggleTodoCompletion, deleteTodo, moveUp, moveDown}
}