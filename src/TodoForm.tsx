import {useRef, useEffect} from 'react'

interface TodoFormProps {
  text: string;
  setText: (text: string) => void;
  onAdd: () => void;
}

export const TodoForm = ({text, setText, onAdd}: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form className='form'
          onSubmit={e => e.preventDefault()}>
      <input
        type='text'
        className='input'
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введи название"
      />
      <button type="button"
              className="counter"
              onClick={onAdd}>
        Добавить
      </button>
    </form>
  )
}