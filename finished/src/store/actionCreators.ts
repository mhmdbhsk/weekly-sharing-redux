import { ADD_TASK, REMOVE_TASK, SET_DONE_TASK } from './actionTypes';

export function addTask(task: Task) {
  const action: TodoAction = {
    type: ADD_TASK,
    task,
  };

  return action;
}

export function removeTask(task: Task) {
  const action: TodoAction = {
    type: REMOVE_TASK,
    task,
  };

  return action;
}

export function setDoneTask(task: Task) {
  const action: TodoAction = {
    type: SET_DONE_TASK,
    task,
  };

  return action;
}
