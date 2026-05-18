import {Button, Checkbox} from './ui'
import {useItemsContext} from '../context/ItemsContext.tsx'

export const TodoItems = () => {
	const {
		todos,
		toggleTodoSelection,
		toggleTodoCompletion,
		deleteTodo,
		moveUp,
		moveDown,
		handleDragStart,
		handleDragOver,
		handleDrop
	} = useItemsContext()

	return (
		<ul className="list">
			{todos.map((item, index) => (
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
						<Checkbox selected={item.isSelected}
						          onChange={() => toggleTodoSelection(item.id)}
						/>
						{item.isCompleted ?
							<span className="crossed">{item.title}</span> :
							<span>{item.title}</span>}
					</label>

					<Button
						label={item.isCompleted ? 'Выполнено' : 'Не выполнено'}
						variant={item.isCompleted ? 'green' : 'red'}
						onClick={() => toggleTodoCompletion(item.id)}
					/>

					<Button label="↑"
					        variant="move"
					        onClick={() => moveUp(index)}
					        disabled={index === 0}
					/>

					<Button label="↓"
					        variant="move"
					        onClick={() => moveDown(index)}
					        disabled={index === todos.length - 1}
					/>

					<Button variant="delete"
					        label="✖"
					        onClick={() => deleteTodo(item.id, item.title)}
					/>
				</li>
			))}
		</ul>
	)
}