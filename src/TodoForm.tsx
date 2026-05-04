import {useRef, useEffect, useState} from 'react'
import type {Action} from './reducer.ts'

interface TodoFormProps {
	dispatch: React.Dispatch<Action>
}

export const TodoForm = ({dispatch}: TodoFormProps) => {
	const [text, setText] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)

	const addTodo = () => {
		if (text.trim()) {
			dispatch({type: 'ADD_TODO', payload: text})
			setText('')
		}
	}

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<form className="form"
		      onSubmit={e => e.preventDefault()}>
			<input
				type="text"
				className="input"
				value={text}
				ref={inputRef}
				minLength={3}
				maxLength={100}
				onChange={(e) => setText(e.target.value)}
				placeholder="Введи название"
			/>
			<button type="button"
			        className="counter"
			        onClick={addTodo}>
				Добавить
			</button>
		</form>
	)
}