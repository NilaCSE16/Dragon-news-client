import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from 'react-icons/fa';
import QZon from '../QZone/QZon';
import './RightNav.css'

import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub>Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <QZon></QZon>
            <div style={{marginBottom: '16%'}} className='container'>
                <img className='position-absolute full-width' src={bg} alt="" />
                <div style={{padding: '30% 12%'}} className='text-center position-relative text-white last-pad'>
                <h1>Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;