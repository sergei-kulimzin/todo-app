import { ListGroup, Button, Modal } from 'react-bootstrap';
import { FaCheck, FaPencilAlt, FaTrashAlt, FaEllipsisH } from 'react-icons/fa';
import classNames from 'classnames';
import { useState } from 'react';

function ListItem({
  id,
  text,
  completed,
  handleComplete,
  handleEdit,
  handleRemove,
}) {
  const [isModalMenuShown, setIsModalMenuShown] = useState(false);

  const handleShowModalMenu = () => {
    setIsModalMenuShown(true);
  };

  const handleHideModalMenu = () => {
    setIsModalMenuShown(false);
  };

  const listItemClassNames = classNames(
    'px-2 d-flex justify-content-between align-items-center',
    { 'bg-success text-light': completed },
    { 'bg-primary bg-opacity-25': !completed }
  );

  return (
    <>
      <Modal
        className='d-flex flex-column justify-content-center align-items-center'
        animation={false}
        show={isModalMenuShown}
        onHide={handleHideModalMenu}
      >
        <Modal.Header closeButton />
        <Modal.Body className='d-flex flex-column justify-content-center'>
          {handleComplete ? (
            <Button
              className='mb-2 bg-gradient d-flex justify-content-center align-items-center'
              variant='success'
              onClick={() => {
                handleComplete(id);
                handleHideModalMenu();
              }}
            >
              <span className='fs-5 me-3 text-uppercase'>отметить</span>
              <FaCheck className='fs-2' />
            </Button>
          ) : null}
          <Button
            className='mb-2 bg-gradient d-flex justify-content-center align-items-center'
            variant='secondary'
            onClick={() => {
              handleEdit(id);
              handleHideModalMenu();
            }}
          >
            <span className='fs-5 me-3 text-uppercase'>редактировать</span>
            <FaPencilAlt className='fs-2' />
          </Button>
          <Button
            className='bg-gradient d-flex justify-content-center align-items-center'
            variant='danger'
            onClick={() => {
              handleRemove(id);
              handleHideModalMenu();
            }}
          >
            <span className='fs-5 me-3 text-uppercase'>удалить</span>
            <FaTrashAlt className='fs-2' />
          </Button>
        </Modal.Body>
      </Modal>
      <ListGroup.Item className={listItemClassNames}>
        <p className='fs-3 text-break mb-0 me-2 w-100'>{text}</p>
        <Button
          className='bg-gradient d-flex justify-content-center align-items-center'
          variant='primary'
          onClick={handleShowModalMenu}
        >
          <FaEllipsisH />
        </Button>
      </ListGroup.Item>
    </>
  );
}

export default ListItem;
