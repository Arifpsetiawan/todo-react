import React, { useState } from "react"
import { Button } from "@mui/material"

import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"

const ToDo = () => {
  const [todos, setTodos] = useState([])

  const handleClickList = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      task: todo,
      complete: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleKeyDown = (e, todo) => {
    if (e.key === "Enter") {
      handleClickList(todo)
    }
  }

  const handleCheckbox = (id) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((todo) => todo.id === id)

    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo.complete === false)
    setTodos(newTodos)
  }

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClickList} handleKeyDown={handleKeyDown} />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
      <Button color="error" variant="outlined" onClick={() => handleDelete()}>
        Remove selected
      </Button>
    </div>
  )
}

export default ToDo
