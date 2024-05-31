import { Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import {  useDispatch, useSelector } from 'react-redux';
import { Singleemplo,Deleteemplo } from '../../Service/Actions/Employeeaction';

function ViewUser() {

    const { employees } = useSelector(state => state.EmployeeReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(Deleteemplo(id));
    }

    const handleEdit = (id) => {
        dispatch(Singleemplo(id));
        navigate('/edit');
    }


    return (
        <>  
            <Container style={{marginTop:'50px'}}>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone No.</th>
                            <th>E-mail</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((data) => {

                                return (
                                    <tr key={data.id}>
                                        <td>
                                            {
                                                data.id
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.fname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.lname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.email
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.addr
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.phone
                                            }
                                        </td>
                                        
                                        <td>
                                            <Button style={{marginRight:'20px',marginLeft:'50px'}} variant='danger' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            
                                            <Button variant='primary' onClick={() => handleEdit(data.id)}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        
        </>
    )
}

export default ViewUser