// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" className="header-style d-flex justify-content-between">
            <Link to='/' className='m-3' style={{fontSize:'20px',fontWeight:'600',color:'#fff',textDecoration:'none'}}>HOME</Link>
            <Link to='/view' className='m-3' style={{fontSize:'20px',fontWeight:'600',color:'#fff',textDecoration:'none'}}>Employee Management</Link>
        </Navbar>
    );
}

export default Header;