import { Outlet } from 'react-router-dom';
import PageHeader from '../../components/page-header/page-header';

function Layout() {
  return (
    <>
      <PageHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
