import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const from = location.state?.from?.pathname || '/category/0';

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true})
                // console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleAccept = (event) => {
        setAccept(event.target.checked);
    }

    return (
        <Container className='form-width mx-auto'>
            <h3 className='text-center'>Register your account</h3>
            <hr />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccept}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms and Conditions
                        </Link></>} />
                </Form.Group>
                <Button disabled={!accept}
                    className='w-100' variant="secondary" type="submit">
                    Register
                </Button><br />
                <Form.Text className="text-secondary">
                    Already have an Account?
                    <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;