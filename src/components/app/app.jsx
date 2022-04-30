import { Route, Routes } from 'react-router-dom';

import Layout from '../../pages/layout/layout';
import CreateTodoListPage from '../../pages/create-todo-list-page/create-todo-list-page';
import MyTodoListsPage from '../../pages/my-todo-lists-page/my-todo-lists-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import EditTodoListPage from '../../pages/edit-todo-list-page/edit-todo-list-page';
import EditTodoListItemPage from '../../pages/edit-todo-list-item-page/edit-todo-list-item-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<CreateTodoListPage />} />
        <Route
          path='edit-todo-list/:todoListID'
          element={<EditTodoListPage />}
        />
        <Route path='my-todo-lists' element={<MyTodoListsPage />} />
        <Route
          path='edit-todo-list-item/:todoListID/:itemID'
          element={<EditTodoListItemPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
