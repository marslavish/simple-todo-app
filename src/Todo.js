import React, { useState, useRef } from "react";
import { ACTIONS } from "./App";

function Todo({ todo, dispatch }) {
  const [isEditable, setIsEditable] = useState(false);
  const [curName, setCurName] = useState(todo.name);
  const inputRef = useRef();

  const handleEditClick = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
    isEditable &&
      dispatch({
        type: ACTIONS.UPDATE_TODO,
        payload: { name: curName, id: todo.id },
      });
  };

  return (
    <div className="todo">
      {isEditable ? (
        <input
          type="text"
          value={curName}
          onChange={(e) => setCurName(e.target.value)}
          ref={inputRef}
          autoFocus
        />
      ) : (
        <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
          {todo.name}
        </span>
      )}

      <button onClick={handleEditClick}>{isEditable ? "OK" : "Edit"}</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
