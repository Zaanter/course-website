import './style.css'

import { Col, Row } from 'react-bootstrap'

import React from 'react'
import SignUpForm from './SignUpForm';

const SignUpScreen = (): JSX.Element => {

    return (
        <div id='SignUpScreen'>
            <Row className='mb-5'>
                <h1>{"<zCoding>"}</h1>
            </Row>
            <Row>
                <SignUpForm></SignUpForm>
            </Row>
        </div>
    )
};

export default SignUpScreen;