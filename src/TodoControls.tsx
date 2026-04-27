interface TodoControlsProps {
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

export const TodoControls = ({ onSelectAll, onDeselectAll }: TodoControlsProps) => {
  return (
    <div className="functions">
      <button type="button" className="counter" onClick={onSelectAll}>
        Выбрать все
      </button>
      <button type="button" className="counter" onClick={onDeselectAll}>
        Снять выделение
      </button>
    </div>
  )
}