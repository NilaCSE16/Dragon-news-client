import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque neque voluptatem suscipit recusandae eum impedit, iure officiis numquam consectetur autem fugit voluptatum voluptate, deserunt eligendi quibusdam reprehenderit provident placeat.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;