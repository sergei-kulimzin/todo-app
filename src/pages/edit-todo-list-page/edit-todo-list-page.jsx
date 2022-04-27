import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addTodoListItem } from '../../store/actions';
import uniqid from 'uniqid';

function EditTodoListPage() {
  const { todoListID } = useParams();

  const todoList = useSelector((state) => {
    return state.todoLists.find((todoList) => todoList.id === todoListID);
  });

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (event) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim().toLowerCase();
    if (cleanInputValue) {
      const newItem = {
        id: uniqid('todo-list-item-id-'),
        text: cleanInputValue,
        completed: false,
      };
      dispatch(
        addTodoListItem({
          todoListID,
          item: newItem,
        })
      );
    }
    setInputValue('');
  };

  const renderTodoList = () => {
    if (todoList.items.length) {
      return (
        <ul>
          {todoList.items.map((todoListItem) => {
            return <li key={todoListItem.id}>{todoListItem.text}</li>;
          })}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <h1>Edit todo list "{todoList.text}"</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
        <button type='submit'>Add todo</button>
      </form>
      {renderTodoList()}
    </>
  );
}

export default EditTodoListPage;
