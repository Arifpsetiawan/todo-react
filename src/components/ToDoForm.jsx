import React from "react"

const ToDoForm = ({ handleClick, handleChange, handleKeyDown, todo }) => {
  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <input
          value={todo}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={() => handleClick()}>Submit</button>
      </span>
    </div>
  )
}

export default ToDoForm
