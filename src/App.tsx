import {useReducer, useState} from 'react'
import {initialState, reducer} from './reducer.ts'
import {TodoForm} from "./TodoForm.tsx";
import {TodoControls} from "./TodoControls.tsx";
import {SelectedActions} from "./SelectedActions.tsx";

function App() {
  const [text, setText] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const [draggedItem, setDraggedItem] = useState<number | null>(null)

  const handleDragStart = (index: number) => setDraggedItem(index)
  const handleDragOver = (e: React.DragEvent) => e.preventDefault()

  const handleDrop = (toIndex: number) => {
    if (draggedItem === null) return
    dispatch({type: 'REORDER_TODOS', payload: {fromIndex: draggedItem, toIndex}})
    setDraggedItem(null)
  }

  const addTodo = () => {
    if (text.trim()) {
      dispatch({type: 'ADD_TODO', payload: text})
      setText('')
    }
  }

  const toggleTodoSelection = (id: string) => dispatch({
    type: 'TOGGLE_SELECT_TODO',
    payload: id
  })

  const toggleTodoCompletion = (id: string) => dispatch({
    type: 'TOGGLE_COMPLETE_TODO',
    payload: id
  })

  const deleteTodo = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      dispatch({type: 'DELETE_TODO', payload: id})
    }
  }

  const moveUp = (index: number) => dispatch({type: 'MOVE_UP', payload: index})
  const moveDown = (index: number) => dispatch({type: 'MOVE_DOWN', payload: index})

  const selectAllTodos = () => dispatch({type: 'SELECT_ALL_TODOS'})
  const deselectAllTodos = () => dispatch({type: 'DESELECT_ALL_TODOS'})

  const deleteAllSelectedTodos = () => {
    if (confirm('Are you sure you want to delete all selected todos?')) {
      dispatch({type: 'DELETE_SELECTED_TODOS'})
    }
  }

  const markSelectedAsDone = () => dispatch({type: 'MARK_SELECTED_AS_DONE'})

  const hasSelectedTodos = state.todos.some(todo => todo.isSelected)

  return (
    <section id="center">
      <h1>TODO LIST</h1>

      <TodoForm text={text}
                setText={setText}
                onAdd={addTodo} />

      <TodoControls onSelectAll={selectAllTodos}
                    onDeselectAll={deselectAllTodos} />

      <ul className='list'>
        {state.todos.map((item, index) => (
          <li
            className='todo'
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <span className='grab'>⋮⋮</span>
            <label>
              <input
                type="checkbox"
                checked={item.isSelected}
                onChange={() => toggleTodoSelection(item.id)}
              />
            </label>

            {item.isCompleted ?
              <span className='crossed'>{item.title}</span> :
              <span>{item.title}</span>}

            <button
              type="button"
              className={item.isCompleted ? 'zel' : 'kra'}
              onClick={() => toggleTodoCompletion(item.id)}
            >
              {item.isCompleted ? 'Выполнено' : 'Не выполнено'}
            </button>

            <button
              type="button"
              className='todosButton'
              onClick={() => moveUp(index)}
              disabled={index === 0}
            >
              ↑
            </button>

            <button
              type="button"
              className='todosButton'
              onClick={() => moveDown(index)}
              disabled={index === state.todos.length - 1}
            >
              ↓
            </button>

            <button
              type="button"
              className='deleteButton'
              onClick={() => deleteTodo(item.id, item.title)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      <SelectedActions
        hasSelectedTodos={hasSelectedTodos}
        onMarkAsDone={markSelectedAsDone}
        onDeleteSelected={deleteAllSelectedTodos}
      />
    </section>
  )
}

export default App