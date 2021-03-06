import React, { useState } from "react";

import { UnorderedList } from "./styles";

interface TodoType {
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const submitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoText) {
      alert("type something first");
      return;
    }

    // we could have used a Set<TodoType> and make our life much easier
    if (todos.filter((t) => t.text === todoText).length > 0) {
      alert("duplicates are not allowed");
      return;
    }

    const newTodo: TodoType = {
      text: todoText,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setTodoText("");
  };

  const updateTodos = (text: string) => {
    const updatedList = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: !todo.completed } : { ...todo }
    );
    setTodos(updatedList);
  };

  const renderTodosListItems = (renderCompleted = false) =>
    todos
      .filter((todo) => (renderCompleted ? todo.completed : !todo.completed))
      .map((todo) => (
        <li key={todo.text} onClick={() => updateTodos(todo.text)}>
          {todo.text}
        </li>
      ));

  return (
    <>
      <h1>Todo List</h1>

      <p>
        <em>click the todos items to mark them completed or uncompleted...</em>
        <br />
        <em>
          code found here:{" "}
          <a
            href="https://github.com/daigof/examples-2022-react-ts"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/daigof/examples-2022-react-ts
          </a>
        </em>
      </p>

      <hr />
      <h3>Submit todo here...</h3>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="type a todo here"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <button type="submit">submit todo</button>
      </form>
      <hr />
      <h3>Todos</h3>
      <UnorderedList>{renderTodosListItems()}</UnorderedList>
      <hr />
      <h3>Completed</h3>
      <UnorderedList hasLineThrough>{renderTodosListItems(true)}</UnorderedList>
    </>
  );
};

export default TodoList;
