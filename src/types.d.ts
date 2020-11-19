interface Todo {
  text: string;
  complete: boolean;
}

type ToogleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
