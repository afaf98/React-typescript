import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: true,
  },
  {
    text: "Write app",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </ul>
    </>
  );
}

export default App;
