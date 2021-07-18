import { ADD_TASK, REMOVE_TASK, SET_DONE_TASK } from './actionTypes';
import initialState from './initialState';

const todoReducers = (state: Todo = initialState, action: TodoAction): Todo => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = {
        id: Math.random(),
        title: action.task.title,
        desc: action.task.desc,
        isDone: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case REMOVE_TASK:
      const updatedTasks: Task[] = state.tasks.filter(
        (task) => task.id !== action.task.id
      );

      return {
        ...state,
        tasks: updatedTasks,
      };
    case SET_DONE_TASK:
      const selectedTask: Task[] = state.tasks.filter(
        (task) => task.id === action.task.id
      );
      console.log(selectedTask);
      break;
  }

  return state;
};

export default todoReducers;
