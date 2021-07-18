import todoReducers from './reducers';
import { createStore, Store } from 'redux';

const store: Store<Task, TodoAction> & { dispatch: DispatchType } =
  createStore(todoReducers);

export default store;
