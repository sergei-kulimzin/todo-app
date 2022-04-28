import { ListGroup, Button } from 'react-bootstrap';
import { FaCheck, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

function ListItem({ id, text, handleComplete, handleEdit, handleRemove }) {
  return (
    <ListGroup.Item className='px-2 d-flex flex-column justify-content-between align-items-center'>
      <p className='text-break mb-0 w-100'>{text}</p>
      <hr className='w-100 my-2' />
      <div>
        {handleComplete ? (
          <Button
            className='me-2'
            variant='success'
            onClick={() => handleComplete(id)}
          >
            <FaCheck className='fs-2' />
          </Button>
        ) : null}
        <Button
          className='me-2'
          variant='secondary'
          onClick={() => handleEdit(id)}
        >
          <FaPencilAlt className='fs-2' />
        </Button>
        <Button variant='danger' onClick={() => handleRemove(id)}>
          <FaTrashAlt className='fs-2' />
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default ListItem;
