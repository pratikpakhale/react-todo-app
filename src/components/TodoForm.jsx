import { useState, useEffect, useRef } from 'react'

const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const submitHandler = e => {
    e.preventDefault()

    if (input.trim().length === 0) return

    onSubmit({
      id: `${Math.random()}_${input}`,
      text: input.trim(),
      isComplete: false,
    })

    setInput('')
  }

  const inputChangeHandler = e => {
    setInput(e.target.value)
  }

  return (
    <form className='todo-form' onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type='text'
        placeholder={edit ? 'Update your todo' : 'Add a Todo'}
        value={input}
        name='text'
        className={`todo-input ${edit && 'edit'}`}
        onChange={inputChangeHandler}
      />
      <button className={`todo-button ${edit && 'edit'}`} type='submit'>
        {edit ? 'Update' : 'Add Todo'}
      </button>
    </form>
  )
}

export default TodoForm
