import React, { useState } from "react"

import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"

const ToDo = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(["Menyapu", "Mengepel", "Mengukur"])

  const handleClickList = () => {
    setTodos([...todos, todo])
    setTodo("")
  }

  const handleChange = (todo) => {
    setTodo(todo)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClickList()
    }
  }

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm
        handleClick={handleClickList}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        todo={todo}
      />
      <ToDoList todos={todos} />
    </div>
  )
}

export default ToDo
