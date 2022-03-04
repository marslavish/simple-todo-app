import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  UPDATE_TODO: "update-todo",
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const reducer = (todos, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== payload.id);
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [nameQuery, setNameQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  const renderTodos = (todos) => {
    return todos.map((todo) => (
      <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    ));
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Create new todo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search todo:</label>
          <input
            type="text"
            id="search"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
          />
        </form>
      </header>
      {renderTodos(
        nameQuery
          ? todos.filter((todo) => todo.name.startsWith(nameQuery))
          : todos
      )}
    </>
  );
}

export default App;

// TODO
// 3. add projects
// 4. add notes to each todo
