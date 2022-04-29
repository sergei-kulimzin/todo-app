import * as types from './types';

const initialValue = {
  todoLists: [],
};

export const reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.CREATE_TODO_LIST:
      const createTodoList = () => {
        const newTodoList = payload.todoList;
        const newTodoLists = [...state.todoLists, newTodoList];
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return createTodoList();

    case types.REMOVE_TODO_LIST:
      const removeTodoList = () => {
        const newTodoLists = state.todoLists.filter(
          (todolist) => todolist.id !== payload.id
        );
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return removeTodoList();

    case types.ADD_TODO_LIST_ITEM:
      const addTodoListItem = () => {
        const currentTodolist = state.todoLists.find(
          (todolist) => todolist.id === payload.todoListID
        );
        const newItems = [...currentTodolist.items, payload.item];
        const newTodoList = { ...currentTodolist, items: newItems };
        const newTodoLists = state.todoLists.map((todoList) => {
          if (todoList.id === payload.todoListID) {
            return newTodoList;
          } else {
            return todoList;
          }
        });
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return addTodoListItem();

    case types.REMOVE_TODO_LIST_ITEM:
      const removeTodoListItem = () => {
        const currentTodolist = state.todoLists.find(
          (todolist) => todolist.id === payload.todoListID
        );
        const newItems = currentTodolist.items.filter(
          (item) => item.id !== payload.itemID
        );
        const newTodoList = { ...currentTodolist, items: newItems };
        const newTodoLists = state.todoLists.map((todoList) => {
          if (todoList.id === payload.todoListID) {
            return newTodoList;
          } else {
            return todoList;
          }
        });
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return removeTodoListItem();

    case types.EDIT_TODO_LIST_ITEM:
      const editTodoListItem = () => {
        const currentTodolist = state.todoLists.find(
          (todolist) => todolist.id === payload.todoListID
        );
        const currentItem = currentTodolist.items.find(
          (item) => item.id === payload.itemID
        );
        const newItem = { ...currentItem, text: payload.text };
        const newItems = currentTodolist.items.map((item) => {
          if (item.id === payload.itemID) {
            return newItem;
          } else {
            return item;
          }
        });
        const newTodoList = { ...currentTodolist, items: newItems };
        const newTodoLists = state.todoLists.map((todoList) => {
          if (todoList.id === payload.todoListID) {
            return newTodoList;
          } else {
            return todoList;
          }
        });
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return editTodoListItem();

    case types.TOGGLE_COMPLETE_TODO_LIST_ITEM:
      const toggleCompleteTodoListItem = () => {
        const currentTodolist = state.todoLists.find(
          (todolist) => todolist.id === payload.todoListID
        );
        const currentItem = currentTodolist.items.find(
          (item) => item.id === payload.itemID
        );
        const newItem = { ...currentItem, completed: !currentItem.completed };
        const newItems = currentTodolist.items.map((item) => {
          if (item.id === payload.itemID) {
            return newItem;
          } else {
            return item;
          }
        });
        const newTodoList = { ...currentTodolist, items: newItems };
        const newTodoLists = state.todoLists.map((todoList) => {
          if (todoList.id === payload.todoListID) {
            return newTodoList;
          } else {
            return todoList;
          }
        });
        const newState = { ...state, todoLists: newTodoLists };
        return newState;
      };
      return toggleCompleteTodoListItem();

    default:
      return state;
  }
};
