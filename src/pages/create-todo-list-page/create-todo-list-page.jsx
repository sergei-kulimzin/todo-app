import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createTodoList } from '../../store/actions';

function CreateTodoListPage() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleChangeInputValue = (event) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim().toLowerCase();
    if (cleanInputValue) {
      const todoList = {
        id: uniqid('todo-list-id-'),
        text: cleanInputValue,
        items: [],
      };
      dispatch(
        createTodoList({
          todoList,
        })
      );
    }
    setInputValue('');
  };

  return (
    <>
      <h1>Create todo list</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
        <button type='submit'>create</button>
      </form>
    </>
  );
}

export default CreateTodoListPage;
