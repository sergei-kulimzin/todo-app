import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addTodoListItem,
  removeTodoListItem,
  toggleCompleteTodoListItem,
} from '../../store/actions';
import uniqid from 'uniqid';
import { Alert, Button, Container, Form, ListGroup } from 'react-bootstrap';

import ListItem from '../../components/list-item/list-item';

function EditTodoListPage() {
  const { todoListID } = useParams();

  const navigate = useNavigate();

  const todoList = useSelector((state) => {
    return state.todoLists.find((todoList) => todoList.id === todoListID);
  });

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();

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

  const handleRemoveTodoListItem = (id) => {
    dispatch(
      removeTodoListItem({
        todoListID,
        itemID: id,
      })
    );
  };

  const handleEditTodoListItem = (id) => {
    navigate(`/edit-todo-list-item/${todoListID}/${id}`);
  };

  const handleToggleCompleteTodoListItem = (id) => {
    dispatch(
      toggleCompleteTodoListItem({
        todoListID,
        itemID: id,
      })
    );
  };

  const renderTodoList = () => {
    if (todoList.items.length) {
      return (
        <ListGroup className='bg-ligth'>
          {todoList.items.map((todoListItem) => {
            return (
              <ListItem
                key={todoListItem.id}
                id={todoListItem.id}
                text={todoListItem.text}
                completed={todoListItem.completed}
                handleEdit={handleEditTodoListItem}
                handleRemove={handleRemoveTodoListItem}
                handleComplete={handleToggleCompleteTodoListItem}
              />
            );
          })}
        </ListGroup>
      );
    } else {
      return null;
    }
  };

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  useRef(setInputFocus, []);

  return (
    <>
      <Container>
        <h1 className='text-center mb-5'>
          Редактировать список "{todoList.text}"
        </h1>
        <Form
          onSubmit={handleSubmitForm}
          className='d-flex flex-column align-items-center mb-5'
        >
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Введите название пункта'
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
            Добавить пункт
          </Button>
        </Form>
        {todoList.items.length ? (
          renderTodoList()
        ) : (
          <Alert variant='warning text-center'>Список пуст</Alert>
        )}
      </Container>
    </>
  );
}

export default EditTodoListPage;
