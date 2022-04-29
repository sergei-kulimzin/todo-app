import { useEffect, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import { createTodoList } from '../../store/actions';

function CreateTodoListPage() {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();

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
      navigate(`/todo-app/edit-todo-list/${todoListID}`);
    }
    setInputValue('');
  };

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(setInputFocus, []);

  return (
    <>
      <Container>
        <h1 className='text-center mb-5'>Создать список</h1>
        <Form
          onSubmit={handleSubmitForm}
          className='d-flex flex-column align-items-center'
        >
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Введите название списка'
            size='lg'
            ref={inputRef}
            value={inputValue}
            onChange={handleChangeInputValue}
          />
          <Button
            className='text-uppercase'
            type='submit'
            variant='primary'
            size='lg'
          >
            создать
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateTodoListPage;
