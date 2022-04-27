import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to='/'>Go main page</Link>
    </>
  );
}

export default NotFoundPage;
