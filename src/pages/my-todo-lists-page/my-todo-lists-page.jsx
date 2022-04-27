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

  const todoListsRender = () => {
    if (todoLists.length) {
      return todoLists.map((todoList) => (
        <li key={todoList.id}>
          {todoList.text}
          <button onClick={() => handleEditTodoList(todoList.id)}>edit</button>
          <button onClick={() => handleRemoveTodoList(todoList.id)}>
            remove
          </button>
        </li>
      ));
    } else {
      return <p>No todo lists</p>;
    }
  };

  return (
    <>
      <h1>My todo lists</h1>
      {todoListsRender()}
    </>
  );
}

export default MyTodoListsPage;
