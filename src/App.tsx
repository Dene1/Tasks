import {useReducer} from 'react'
import {initialState, reducer} from './reducer.ts'
import {TodoForm} from './TodoForm.tsx'
import {TodoControls} from './TodoControls.tsx'
import {SelectedActions} from './SelectedActions.tsx'
import {useDragAndDrop, useTodoActions} from './hooks'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {handleDragStart, handleDragOver, handleDrop} = useDragAndDrop(dispatch)
	const {
		toggleTodoSelection,
		toggleTodoCompletion,
		deleteTodo,
		moveUp,
		moveDown
	} = useTodoActions(dispatch)

	const hasSelectedTodos = state.todos.some(todo => todo.isSelected)

	return (
		<section id="center">
			<h1>TODO LIST</h1>
			<TodoForm dispatch={dispatch} />
			<TodoControls dispatch={dispatch} />

			<ul className="list">
				{state.todos.map((item, index) => (
					<li
						className="todo"
						key={item.id}
						draggable
						onDragStart={() => handleDragStart(index)}
						onDragOver={handleDragOver}
						onDrop={() => handleDrop(index)}
					>
						<span className="grab">⋮⋮</span>
						<label>
							<input
								type="checkbox"
								checked={item.isSelected}
								onChange={() => toggleTodoSelection(item.id)}
							/>
						</label>

						{item.isCompleted ?
							<span className="crossed">{item.title}</span> :
							<span>{item.title}</span>}

						<button
							type="button"
							className={item.isCompleted ? 'green' : 'red'}
							onClick={() => toggleTodoCompletion(item.id)}
						>
							{item.isCompleted ? 'Выполнено' : 'Не выполнено'}
						</button>

						<button
							type="button"
							className="todosButton"
							onClick={() => moveUp(index)}
							disabled={index === 0}
						>
							↑
						</button>

						<button
							type="button"
							className="todosButton"
							onClick={() => moveDown(index)}
							disabled={index === state.todos.length - 1}
						>
							↓
						</button>

						<button
							type="button"
							className="deleteButton"
							onClick={() => deleteTodo(item.id, item.title)}
						>
							✖
						</button>
					</li>
				))}
			</ul>

			{hasSelectedTodos && <SelectedActions dispatch={dispatch} />}
		</section>
	)
}

export default App