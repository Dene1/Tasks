import {useState} from 'react'
import type {Action} from '../reducers/reducer.ts'

export const useDragAndDrop = (dispatch: React.Dispatch<Action>) => {
	const [draggedItem, setDraggedItem] = useState<number | null>(null)

	const handleDragStart = (index: number) => setDraggedItem(index)
	const handleDragOver = (e: React.DragEvent) => e.preventDefault()

	const handleDrop = (toIndex: number) => {
		if (draggedItem === null) return
		dispatch({type: 'REORDER_TODOS', payload: {fromIndex: draggedItem, toIndex}})
		setDraggedItem(null)
	}

	return {draggedItem, handleDragStart, handleDragOver, handleDrop}
}