import {useRef, useEffect, useState} from 'react'
import {Input, Button} from './ui'
import {useItemsContext} from '../context/ItemsContext.tsx'


export const TodoForm = () => {
	const [text, setText] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)
	const {dispatch} = useItemsContext()

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
			<Input
				text={text}
				ref={inputRef}
				minLength={3}
				maxLength={70}
				changeText={(e) => setText(e.target.value)}
				placeholder="Введи название"
			/>
			<Button label="Добавить"
			        onClick={addTodo} />
		</form>
	)
}