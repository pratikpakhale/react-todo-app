import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todoArray, setTodoArray] = useState([])

  const addTodo = todo => {
    setTodoArray([todo, ...todoArray])
  }

  const completeTodo = id => {
    setTodoArray(
      todoArray.map(todo => {
        if (todo.id === id) todo.isComplete = !todo.isComplete
        return todo
      })
    )
  }

  const updateTodo = (todoId, newValue) => {
    setTodoArray(prevTodoArray =>
      prevTodoArray.map(todo => {
        if (todo.id === todoId) todo.text = newValue
        return todo
      })
    )
  }

  const removeTodo = id => {
    setTodoArray(todoArray.filter(todo => todo.id !== id))
  }

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todoArray={todoArray}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
