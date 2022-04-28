import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <Container>
        <Alert className='text-center' variant='danger'>
          <Alert.Heading className='fs-1'>Page not found!</Alert.Heading>
          <hr />
          <Link className='alert-link' to='/'>
            Go back main page
          </Link>
        </Alert>
      </Container>
    </>
  );
}

export default NotFoundPage;
