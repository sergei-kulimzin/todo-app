export const LocalStorageMiddleware = (store) => (next) => (action) => {
  const newState = next(action);
  localStorage.setItem('todo-app', JSON.stringify(store.getState()));
  return newState;
};
