import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { BsClipboardCheck } from 'react-icons/bs';
import uniqid from 'uniqid';

const navLinks = [
  {
    id: uniqid('nav-link-id-'),
    href: '/',
    content: 'Создать список',
  },
  {
    id: uniqid('nav-link-id-'),
    href: '/my-todo-lists',
    content: 'Мои списки',
  },
];

function PageHeader() {
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);

  const handleShowNavMenu = () => {
    setIsNavMenuShown(true);
  };

  const handleHideNavMenu = () => {
    setIsNavMenuShown(false);
  };

  const renderNavList = () => {
    if (navLinks.length) {
      return navLinks.map((navLink) => (
        <NavLink
          key={navLink.id}
          className='nav-link link-light fs-3'
          to={navLink.href}
          onClick={handleHideNavMenu}
        >
          {navLink.content}
        </NavLink>
      ));
    } else {
      return null;
    }
  };

  return (
    <header className='bg-dark'>
      <Container fluid='md'>
        <Navbar expand={false} variant='dark' bg='dark'>
          <Link to='/'>
            <BsClipboardCheck className='text-light fs-1' />
          </Link>
          <Navbar.Toggle onClick={handleShowNavMenu} />
          <Navbar.Offcanvas
            className='bg-dark'
            placement='end'
            show={isNavMenuShown}
            onHide={handleHideNavMenu}
          >
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title className='text-secondary'>Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>{renderNavList()}</Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </header>
  );
}

export default PageHeader;
