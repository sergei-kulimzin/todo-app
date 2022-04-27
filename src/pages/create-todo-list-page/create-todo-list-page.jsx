import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import { createTodoList } from '../../store/actions';

function CreateTodoListPage() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeInputValue = (event) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim().toLowerCase();
    const todoListID = uniqid('todo-list-id-');
    if (cleanInputValue) {
      const todoList = {
        id: todoListID,
        text: cleanInputValue,
        items: [],
      };
      dispatch(
        createTodoList({
          todoList,
        })
      );
      navigate(`/edit-todo-list/${todoListID}`);
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
