import { useState } from 'react'
import './App.css'
import AddTodo from "./component/AddTodo"
import Todo from './component/Todos'
function App() {


  return (
    <>
      <h1>Redux Toolkit </h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
