import React from 'react';

import './authenticator.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

const Authenticator = () => (
    <div className='authenticator'>
        <SignIn />
        <SignUp />
    </div>
);


export default Authenticator;