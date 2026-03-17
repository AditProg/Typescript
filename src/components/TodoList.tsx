import React from 'react'
import { useState } from 'react'



interface Todo{
    id: number;
    task: string;
    completed: boolean;
}
const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([])
   

  return (

<div>
    <h1>Todo List</h1>
    <button onClick={() => setTodos([...todos, { id: Date.now(), task: `Todo ${todos.length + 1}`, completed: false }])}>Add Todo</button>
    <ul>
        s
        {todos.map(todo => (
            <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.task}
                </span>
            </li>
        ))}
    </ul>   
</div>
      
  )
}

export default TodoList
