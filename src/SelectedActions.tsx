interface SelectedActionsProps {
  hasSelectedTodos: boolean;
  onMarkAsDone: () => void;
  onDeleteSelected: () => void;
}

export const SelectedActions = ({
                                  hasSelectedTodos,
                                  onMarkAsDone,
                                  onDeleteSelected
                                }: SelectedActionsProps) => {
  if (!hasSelectedTodos) return null

  return (
    <div className="functions">
      <button type="button" className='zel' onClick={onMarkAsDone}>
        Сделать выполненными
      </button>
      <button type="button" className='deleteButton' onClick={onDeleteSelected}>
        Удалить выбранные
      </button>
    </div>
  )
}