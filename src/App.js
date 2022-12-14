import React, { useState } from 'react'
import TodoForm from './components/todo-form/todo-form'
import Todo from './components/todo/todo'
import uniqid from 'uniqid';
import logo from './assets/rocket.svg'
import './assets/base.scss'
import board from './assets/board-icon.svg'

function App() {

  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  const addTask = (userInput) => {
    const newTask = {
      id: uniqid(),
      task: userInput,
      complate: false
    }
    setTodos([...todos, newTask])
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
    todos.forEach(todo => {
      if (todo.complate) {
        setCount(count - 1)
      }
    })
  }

  const editTask = (id) => {
  }

  const todoComplate = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? { ...todo, complate: !todo.complate } : { ...todo }
    ),
    ]);
    todos.forEach((todo) => {
      if (todo.id === id) {
        if (!todo.complate) {
          setCount(count + 1);
        }
        else {
          setCount(count - 1);
        }
      }
    })
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
          <div className='todo__done'>Done <span className='todo__counter-num'>{count}</span></div>
        </div>

        {todos.length ?
          todos.map((todo) => {
            return (
              < Todo
                todo={todo}
                key={todo.id}
                removeTask={removeTask}
                todoComplate={todoComplate}
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