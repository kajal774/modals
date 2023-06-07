
import React, { useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Table = (props) => {
  const location = useLocation();
  let navigate = useNavigate();

  const [display, setDisplay] = useState(location.state.total);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValues, setEditValues] = useState({ fname: '', email: '' });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleDelete = (index) => {
    const updatedItems = [...display];
    updatedItems.splice(index, 1);
    setDisplay(updatedItems);
  };

  const handleEditItem = (index) => {
    setShow(true)
    setEditingIndex(index);
    const { fname, email } = display[index];
    setEditValues({ fname, email });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditValues({ fname: '', email: '' });
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...display];
    updatedItems[index] = editValues;
    setDisplay(updatedItems);
    setEditingIndex(null);
    setEditValues({ fname: '', email: '' });
    setShow(false)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <table className="table" border="1px" style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Slno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>
              <Button variant="primary" onClick={ ()=>handleEditItem(index) }>edit</Button>
              <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button></td>
             
      

      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>enter name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={editValues.fname}
                placeholder="enter your name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editValues.email}
                placeholder="enter yours name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelEdit} >
            clear
          </Button>
          <Button variant="primary" onClick={() => handleSaveEdit(index)}>
            update
          </Button>
        </Modal.Footer>
      </Modal> 
    
      </tr>
          ))}
        </tbody>
      </table>     
      <button className='btn btn-dark' onClick={() => navigate(-1)}>Back</button> 
    </div>
  );
};

export default Table;
