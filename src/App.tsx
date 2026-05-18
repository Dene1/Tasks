import {SelectedActions, TodoForm, TodoControls} from './components'
import {TodoItems} from './components/TodoItems.tsx'
import {ItemsProvider} from './context/ItemsProvider.tsx'

function App() {
	return (
		<section id="center">
			<h1>TODO LIST</h1>
			<ItemsProvider>
				<TodoForm />
				<TodoControls />
				<TodoItems />
				<SelectedActions />
			</ItemsProvider>
		</section>
	)
}

export default App