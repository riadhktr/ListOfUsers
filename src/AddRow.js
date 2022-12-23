
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddRow = ({handelAdd}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [gender, setGender] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
       
    const addNewPerson=()=>{
        handelAdd({
            id: Date.now(),
            first_name:name,
            last_name:lastName,
            email:mail,
            gender:gender
        })
        handleClose()
    }

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Add new user
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
        <input type='text' onChange={(e)=>setLastName(e.target.value)}/>
        <input type='text' onChange={(e)=>setMail(e.target.value)}/>
        <select onChange={(e)=>setGender(e.target.value)} >
            <option value='Male'>Male</option>
            <option value="Female">Female</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addNewPerson} >
          Save 
        </Button>
      </Modal.Footer>
    </Modal>
  </> 
  
  )
}

export default AddRow