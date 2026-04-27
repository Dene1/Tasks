export const initialState = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: 'Привет',
      isSelected: false,
      isCompleted: false,
      priority: 1
    },
    {
      id: crypto.randomUUID(),
      title: 'Тестовые',
      isSelected: false,
      isCompleted: false,
      priority: 2
    },
    {
      id: crypto.randomUUID(),
      title: 'Задача 1',
      isSelected: false,
      isCompleted: false,
      priority: 3
    }
  ]
}

export type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_SELECT_TODO'; payload: string }
  | { type: 'SELECT_ALL_TODOS' }
  | { type: 'DESELECT_ALL_TODOS' }
  | { type: 'DELETE_SELECTED_TODOS' }
  | { type: 'MARK_SELECTED_AS_DONE' }
  | { type: 'TOGGLE_COMPLETE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'REORDER_TODOS'; payload: { fromIndex: number; toIndex: number } }
  | { type: 'MOVE_UP'; payload: number }
  | { type: 'MOVE_DOWN'; payload: number }

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, {
          id: crypto.randomUUID(),
          title: action.payload,
          isCompleted: false,
          isSelected: false,
          priority: state.todos.length + 1
        }]
      }
    }

    case "TOGGLE_SELECT_TODO": {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isSelected: !todo.isSelected }
            : todo
        )
      }
    }

    case "SELECT_ALL_TODOS": {
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, isSelected: true }))
      }
    }

    case "DESELECT_ALL_TODOS": {
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, isSelected: false }))
      }
    }

    case "DELETE_SELECTED_TODOS": {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isSelected)
      }
    }

    case "MARK_SELECTED_AS_DONE": {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.isSelected
            ? { ...todo, isCompleted: true, isSelected: false }
            : todo
        )
      }
    }

    case "TOGGLE_COMPLETE_TODO": {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted, isSelected: false }
            : todo
        )
      }
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    }

    case "REORDER_TODOS": {
      const { fromIndex, toIndex } = action.payload
      if (fromIndex === toIndex) return state

      const newTodos = [...state.todos]
      const [removed] = newTodos.splice(fromIndex, 1)
      newTodos.splice(toIndex, 0, removed)

      const updatedTodos = newTodos.map((todo, idx) => ({
        ...todo,
        priority: idx + 1
      }))

      return {
        ...state,
        todos: updatedTodos
      }
    }

    case "MOVE_UP": {
      const index = action.payload
      if (index === 0) return state

      const newTodos = [...state.todos]
      ;[newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]]

      const updatedTodos = newTodos.map((todo, idx) => ({
        ...todo,
        priority: idx + 1
      }))

      return {
        ...state,
        todos: updatedTodos
      }
    }

    case "MOVE_DOWN": {
      const index = action.payload
      if (index === state.todos.length - 1) return state

      const newTodos = [...state.todos]
      ;[newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]]

      const updatedTodos = newTodos.map((todo, idx) => ({
        ...todo,
        priority: idx + 1
      }))

      return {
        ...state,
        todos: updatedTodos
      }
    }

    default:
      return state
  }
}