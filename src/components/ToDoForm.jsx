import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

const ToDoForm = ({ handleClick, handleKeyDown }) => {
  const [todo, setTodo] = useState("")

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <TextField
          label="To do"
          variant="outlined"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            handleKeyDown(e, todo)
            e.key === "Enter" && setTodo("")
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleClick(todo)
            setTodo("")
          }}
        >
          Submit
        </Button>
      </span>
    </div>
  )
}

export default ToDoForm
