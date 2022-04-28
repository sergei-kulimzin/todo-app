import { Alert, Container, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTodoList } from '../../store/actions';
import ListItem from '../../components/list-item/list-item';

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
        <ListItem
          key={todoList.id}
          id={todoList.id}
          text={todoList.text}
          handleEdit={handleEditTodoList}
          handleRemove={handleRemoveTodoList}
        />
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
