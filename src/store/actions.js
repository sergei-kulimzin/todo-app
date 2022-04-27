import * as types from './types';

export const createTodoList = (payload) => ({
  type: types.CREATE_TODO_LIST,
  payload,
});

export const removeTodoList = (payload) => ({
  type: types.REMOVE_TODO_LIST,
  payload,
});

export const addTodoListItem = (payload) => ({
  type: types.ADD_TODO_LIST_ITEM,
  payload,
});

export const removeTodoListItem = (payload) => ({
  type: types.REMOVE_TODO_LIST_ITEM,
  payload,
});

export const editTodoListItem = (payload) => ({
  type: types.EDIT_TODO_LIST_ITEM,
  payload,
});
