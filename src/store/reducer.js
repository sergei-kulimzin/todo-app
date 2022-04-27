import * as types from './types';

const initialValue = {
  todoLists: [
    {
      id: 'test-todo-list-id',
      text: 'test-todo-list-text',
      items: [
        {
          id: 'test-todo-item-id',
          text: 'test-todo-item-text',
          completed: false,
        },
      ],
    },
  ],
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

    default:
      return state;
  }
};
