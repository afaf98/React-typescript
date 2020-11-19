interface Todo {
  text: string;
  complete: boolean;
}

type ToogleTodo = (selectedTodo: Todo) => void;
