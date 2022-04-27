import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

const navLinks = [
  {
    id: uniqid('nav-link-id-'),
    href: '/',
    content: 'create todo list',
  },
  {
    id: uniqid('nav-link-id-'),
    href: '/my-todo-lists',
    content: 'my todo lists',
  },
];

function PageHeader() {
  const navListRender = () => {
    if (navLinks.length) {
      return (
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink to={navLink.href}>{navLink.content}</NavLink>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <header>
      <nav>{navListRender()}</nav>
    </header>
  );
}

export default PageHeader;
