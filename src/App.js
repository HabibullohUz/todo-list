import React, { useState } from 'react'
import TodoForm from './components/todo-form/todo-form'
import Todo from './components/todo/todo'
import uniqid from 'uniqid';
import logo from './assets/rocket.svg'
import './assets/base.scss'
import board from './assets/board-icon.svg'
import 'remixicon/fonts/remixicon.css'

function App() {

  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)
  const [quantity, setQuantity] = useState(0);

  const addTask = (userInput) => {
    const newTask = {
      id: uniqid(),
      task: userInput,
      complate: false
    }
    setTodos([...todos, newTask])
    console.log(todos);
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
    todos.forEach(todo => {
      if (todo.complate) {
        setCount(count - 1)
      }
    })
  }

  const editTodo = (id, newText) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const todoComplate = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? { ...todo, complate: !todo.complate } : { ...todo }).sort((a, b) => a.complate - b.complate)
    ])
    todos.map((todo) => (!todo.complate && todo.id === id) && setQuantity(quantity + 1));
    todos.map((todo) => (todo.complate && todo.id === id) && setQuantity(quantity - 1));
    console.log(todos)
  };

  return (
    <div className='app'>
      <header className='header'>
        <span className='header__logo'>
          <img src={logo} alt="" />
        </span>
      </header>
      <TodoForm
        addTask={addTask}
      />

      <div className="todo__wrapper">
        <div className="todo__counter">
          <div className='todo__created'>Created <span className='todo__counter-num'>{todos.length}</span></div>
          <div className='todo__done'>Done <span className='todo__counter-num'>{quantity}</span></div>
        </div>

        {todos.length ?
          todos.map((todo) => {
            return (
              < Todo
                todo={todo}
                key={todo.id}
                removeTask={removeTask}
                todoComplate={todoComplate}
                editTodo={editTodo}
              />
            )
          })
          : <div className="todo__body">

            <img src={board} alt="" />
            <p className='todo__body-info'>
              You have no tasks registered yet <br />
              Create tasks and organize your tasks
            </p>
          </div>
        }
      </div>
    </div>
  )
}

export default App
