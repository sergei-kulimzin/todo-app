import { Alert, Container, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTodoList } from '../../store/actions';
import ListItem from '../../components/list-item/list-item';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function MyTodoListsPage() {
  const todoLists = useLocalStorage((state) => state.todoLists);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemoveTodoList = (id) => {
    dispatch(removeTodoList({ id }));
  };

  const handleEditTodoList = (id) => {
    navigate(`/todo-app/edit-todo-list/${id}`);
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
        <h1 className='text-center mb-5'>Мои списки</h1>
        {todoLists.length ? (
          renderTodoLists()
        ) : (
          <Alert className='text-center' variant='warning'>
            Нет списков
          </Alert>
        )}
      </Container>
    </>
  );
}

export default MyTodoListsPage;
