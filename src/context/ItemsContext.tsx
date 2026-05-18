import {createContext, useContext, type Dispatch} from 'react'

type Todo = {
	id: string
	title: string
	isSelected: boolean
	isCompleted: boolean
}

type ItemsContextType = {
	todos: Todo[]
	dispatch: Dispatch<any>
	toggleTodoSelection: (id: string) => void
	toggleTodoCompletion: (id: string) => void
	deleteTodo: (id: string, title: string) => void
	moveUp: (index: number) => void
	moveDown: (index: number) => void
	handleDragStart: (index: number) => void
	handleDragOver: (e: React.DragEvent) => void
	handleDrop: (toIndex: number) => void
}

export const ItemsContext = createContext<ItemsContextType | null>(null)

export const useItemsContext = () => {
	const context = useContext(ItemsContext)
	if (!context) {
		throw new Error('useItemsContext must be used within ItemsProvider')
	}
	return context
}