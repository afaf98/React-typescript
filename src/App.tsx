import React, { useState } from "react";
import { AddTodoForm } from "./AddToDoForm";
import { TodoList } from "./TodoList";

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
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <ul>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </ul>
    </>
  );
}

export default App;
