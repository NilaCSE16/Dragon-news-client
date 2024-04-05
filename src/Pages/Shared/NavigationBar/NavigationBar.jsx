import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-secondary' to='/category/0'>Home</Link>
                            <Link className='text-decoration-none text-secondary ms-4' to='#'>About</Link>
                            <Link className='text-decoration-none text-secondary ms-4' to='#'>Career</Link>
                        </Nav>
                        {/* <Nav>
                            <FaUserCircle style={{fontSize: '2.3rem'}} className='text-secondary'></FaUserCircle>
                        </Nav> */}
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle>
                            }
                            {user ?
                                <Button onClick={handleLogOut} className='ms-2' variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button className='ms-2' variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;