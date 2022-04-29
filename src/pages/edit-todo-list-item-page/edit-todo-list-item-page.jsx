import { useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap';
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

  const inputRef = useRef();

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

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(setInputFocus, []);

  return (
    <>
      <Container>
        <h1 className='text-center mb-5'>Редактировать пункт</h1>
        <Form
          onSubmit={handleSubmitForm}
          className='d-flex flex-column align-items-center'
        >
          <Form.Control
            className='mb-3'
            type='text'
            size='lg'
            ref={inputRef}
            value={inputValue}
            onChange={handleChangeInputValue}
          />
          <ButtonGroup>
            <Button className='text-uppercase' type='submit' variant='primary'>
              сохранить
            </Button>
            <Button
              className='text-uppercase'
              type='button'
              variant='danger'
              onClick={handleCancelSubmit}
            >
              отменить
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
}

export default EditTodoListItemPage;
