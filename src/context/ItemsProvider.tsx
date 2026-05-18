import {type ReactNode, useMemo, useReducer} from 'react'
import {ItemsContext} from './ItemsContext'
import {reducer, initialState} from '../reducers/reducer'
import {useDragAndDrop, useTodoActions} from '../hooks'

interface ItemsProviderProps {
	children: ReactNode
}

export const ItemsProvider = ({children}: ItemsProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {handleDragStart, handleDragOver, handleDrop} = useDragAndDrop(dispatch)
	const {
		toggleTodoSelection,
		toggleTodoCompletion,
		deleteTodo,
		moveUp,
		moveDown
	} = useTodoActions(dispatch)

	const value = useMemo(() => ({
		todos: state.todos,
		toggleTodoSelection,
		toggleTodoCompletion,
		deleteTodo,
		moveUp,
		dispatch,
		moveDown,
		handleDragStart,
		handleDragOver,
		handleDrop
	}), [
		state.todos,
		toggleTodoSelection,
		toggleTodoCompletion,
		deleteTodo,
		moveUp,
		dispatch,
		moveDown,
		handleDragStart,
		handleDragOver,
		handleDrop
	])

	return (
		<ItemsContext value={value}>
			{children}
		</ItemsContext>
	)
}