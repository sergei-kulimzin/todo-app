import { ListGroup, Button } from 'react-bootstrap';
import { FaCheck, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import classNames from 'classnames';

function ListItem({
  id,
  text,
  completed,
  handleComplete,
  handleEdit,
  handleRemove,
}) {
  const listItemClassNames = classNames(
    'px-2 d-flex justify-content-between align-items-center',
    { 'bg-success text-light': completed },
    { 'bg-primary bg-opacity-25': !completed }
  );

  return (
    <ListGroup.Item className={listItemClassNames}>
      <p className='fs-3 text-center text-break mb-0 me-2 w-100'>{text}</p>
      <div className='d-flex flex-column align-items-center'>
        {handleComplete ? (
          <Button
            className='mb-2 bg-gradient'
            variant='success'
            onClick={() => handleComplete(id)}
          >
            <FaCheck className='fs-2' />
          </Button>
        ) : null}
        <Button
          className='mb-2 bg-gradient'
          variant='secondary'
          onClick={() => handleEdit(id)}
        >
          <FaPencilAlt className='fs-2' />
        </Button>
        <Button
          className='bg-gradient'
          variant='danger'
          onClick={() => handleRemove(id)}
        >
          <FaTrashAlt className='fs-2' />
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default ListItem;
