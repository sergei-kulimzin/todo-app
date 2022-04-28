import {
  Alert,
  Button,
  ButtonGroup,
  Container,
  ListGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTodoList } from '../../store/actions';

function MyTodoListsPage() {
  const todoLists = useSelector((state) => state.todoLists);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemoveTodoList = (id) => {
    dispatch(removeTodoList({ id }));
  };

  const handleEditTodoList = (id) => {
    navigate(`/edit-todo-list/${id}`);
  };

  const renderTodoLists = () => (
    <ListGroup>
      {todoLists.map((todoList) => (
        <ListGroup.Item
          key={todoList.id}
          className='px-2 d-flex justify-content-between align-items-center'
        >
          {todoList.text}
          <ButtonGroup>
            <Button
              variant='primary'
              onClick={() => handleEditTodoList(todoList.id)}
            >
              edit
            </Button>
            <Button
              variant='danger'
              onClick={() => handleRemoveTodoList(todoList.id)}
            >
              remove
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <>
      <Container>
        <h1 className='text-center mb-5'>My todo lists</h1>
        {todoLists.length ? (
          renderTodoLists()
        ) : (
          <Alert className='text-center' variant='warning'>
            No todo lists
          </Alert>
        )}
      </Container>
    </>
  );
}

export default MyTodoListsPage;
