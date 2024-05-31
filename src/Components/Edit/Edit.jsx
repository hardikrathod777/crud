// import React from 'react'
import {  useState,useEffect } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import { Updateemplo } from '../../Service/Actions/Employeeaction';
function Edit() {

    const {employee} = useSelector(state => state.EmployeeReducer);    
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState({
        id: '',
        fname: '',
        lname: '',
        addr: '',
        phone: '',
        email: '',
    }); 

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputText({ ...inputText, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Updateemplo(inputText));
    
    setInputText({
      id: '',
      fname: '',
      lname: '',
      addr: '',
      phone: '',
      email: '',
    });
  
    navigate('/view');
  }

  useEffect(() => {
    setInputText(employee);
}, [employee])

  return (
    <>
        <Container className="mt-5 mb-5">
                <div className="row">
                    <div className="col-xxl-12">
                        <h3 className="text-center">NEW EMPLOYEE</h3>
                    </div>
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="col-xxl-7">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Col} controlId="formGridEmail" className='mb-4'>
                                    <Form.Control type="text" placeholder="Enter ID" name='id' value={inputText.id} hidden />
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" name="fname" value={inputText.fname} onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" className='mb-4'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={inputText.lname} onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip" className='mb-4'>
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={inputText.email} onChange={handleInput}/>
                                </Form.Group>
                                
                                <Form.Group className="mb-4" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" name="addr" value={inputText.addr} onChange={handleInput}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity" className='mb-4'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="number" placeholder="99999 99999" name="phone" value={inputText.phone} onChange={handleInput}/>
                                </Form.Group>

                                
                                <div className="d-flex  justify-content-center mt-5">
                                    <Button style={{backgroundColor:'green'}} type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Edit