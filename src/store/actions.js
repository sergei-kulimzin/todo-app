import * as types from './types';

export const createTodoList = (payload) => ({
  type: types.CREATE_TODO_LIST,
  payload,
});

export const removeTodoList = (payload) => ({
  type: types.REMOVE_TODO_LIST,
  payload,
});
