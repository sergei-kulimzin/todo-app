import { useDispatch, useSelector } from 'react-redux';
import { removeTodoList } from '../../store/actions';

function MyTodoListsPage() {
  const todoLists = useSelector((state) => state.todoLists);

  const dispatch = useDispatch();

  const handleRemoveTodoList = (id) => {
    dispatch(removeTodoList({ id }));
  };

  const todoListsRender = () => {
    if (todoLists.length) {
      return todoLists.map((todoList) => (
        <li key={todoList.id}>
          {todoList.text}
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
