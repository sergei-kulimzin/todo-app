import { useSelector } from 'react-redux';

function MyTodoListsPage() {
  const todoLists = useSelector((state) => state.todoLists);

  const todoListsRender = () => {
    if (todoLists.length) {
      return todoLists.map((todoList) => (
        <li key={todoList.id}>{todoList.text}</li>
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
