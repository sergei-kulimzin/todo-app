import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTodoListItem, removeTodoListItem } from '../../store/actions';
import uniqid from 'uniqid';
import {
  Alert,
  Button,
  ButtonGroup,
  Container,
  Form,
  ListGroup,
} from 'react-bootstrap';

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

  const renderTodoList = () => {
    if (todoList.items.length) {
      return (
        <ListGroup>
          {todoList.items.map((todoListItem) => {
            return (
              <ListGroup.Item
                key={todoListItem.id}
                className='d-flex justify-content-between align-items-center px-2'
              >
                <span className='text-break me-2'>{todoListItem.text}</span>
                <ButtonGroup>
                  <Button
                    variant='primary'
                    onClick={() => handleEditTodoListItem(todoListItem.id)}
                  >
                    edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => handleRemoveTodoListItem(todoListItem.id)}
                  >
                    remove
                  </Button>
                </ButtonGroup>
              </ListGroup.Item>
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
        <h1 className='text-center mb-5'>Edit todo list "{todoList.text}"</h1>
        <Form
          onSubmit={handleSubmitForm}
          className='d-flex flex-column align-items-center mb-5'
        >
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Enter new todo'
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
            Add todo
          </Button>
        </Form>
        {todoList.items.length ? (
          renderTodoList()
        ) : (
          <Alert variant='warning text-center'>Todo list is empty</Alert>
        )}
      </Container>
    </>
  );
}

export default EditTodoListPage;
