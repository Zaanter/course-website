import './style.css'

import { Col, Row } from 'react-bootstrap'

import LoginForm from './LoginForm';
import React from 'react'

const LoginScreen = (): JSX.Element => {

   

    return (
        <div id='loginScreen'>
            <Row className='mb-5'>
                <h1>{"<zCoding>"}</h1>
            </Row>
            <Row>
                <LoginForm></LoginForm>
            </Row>
        </div>
    )
};

export default LoginScreen;