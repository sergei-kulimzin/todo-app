import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editTodoListItem } from '../../store/actions';

function EditTodoListItemPage() {
  const { todoListID, itemID } = useParams();

  const navigate = useNavigate();

  const todoListItem = useSelector((state) => {
    const todoList = state.todoLists.find(
      (todoList) => todoList.id === todoListID
    );
    const todoListItem = todoList.items.find((item) => item.id === itemID);
    return todoListItem;
  });

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(todoListItem.text);

  const handleChangeInputValue = (event) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim().toLowerCase();
    if (cleanInputValue) {
      dispatch(
        editTodoListItem({
          todoListID,
          itemID,
          text: cleanInputValue,
        })
      );
      navigate(`/edit-todo-list/${todoListID}`);
    }
    setInputValue('');
  };

  const handleCancelSubmit = () => {
    navigate(`/edit-todo-list/${todoListID}`);
  };

  return (
    <>
      <h1>Edit todo list item</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelSubmit}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default EditTodoListItemPage;
