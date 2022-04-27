import * as types from './types';

export const createTodoList = (payload) => ({
  type: types.CREATE_TODO_LIST,
  payload,
});
