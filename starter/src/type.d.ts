interface Task {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
}

type Todo = {
  tasks: Task[];
};

type TodoAction = {
  type: string;
  task: Task;
};

type DispatchType = (args: TodoAction) => TodoAction;
