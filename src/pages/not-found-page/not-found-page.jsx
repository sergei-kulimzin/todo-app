import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <Container>
        <Alert className='text-center' variant='danger'>
          <Alert.Heading className='fs-1'>Страница не найдена!</Alert.Heading>
          <hr />
          <Link className='alert-link' to='/'>
            Вернуться на главную страницу
          </Link>
        </Alert>
      </Container>
    </>
  );
}

export default NotFoundPage;
