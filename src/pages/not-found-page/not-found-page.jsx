import { Alert, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
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
