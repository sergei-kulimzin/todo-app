import { useSelector } from 'react-redux';

export const useLocalStorage = (callback) => {
  const state = useSelector((state) => state);

  const localStorageState = localStorage.getItem('todo-app');

  if (localStorageState) {
    return callback(JSON.parse(localStorageState));
  } else {
    return callback(state);
  }
};
