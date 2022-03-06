import './style.css'

import { Button, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

import { AuthContext } from '../../../context/AuthContext';
import { FirebaseError } from 'firebase/app';
import firebaseErrorHandler from '../../../utils/firebaseErrorHandler';

interface Props { }

const SignUpForm = (props: Props): JSX.Element => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    //@ts-ignore
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeated, setPasswordRepeated] = useState('')
    const [signupError, setSignupError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password === passwordRepeated) {
            auth.emailSignUp(email, password, () => {
                navigate(from, { replace: true });
            }, (e:FirebaseError) => {
                setSignupError(firebaseErrorHandler(e))
            });
        } else {
            setPasswordError('Las contraseñas no coinciden.')
        }
    }


    return (
        <form id='signUpForm' onSubmit={handleSubmit}>
            <Row className='text-center'>
                <h2>Sign Up</h2>
            </Row>
            <Row>
                <div className="form-group pt-2 pb-2">
                    <label className='pb-1'>Email</label>
                    <input type="text" required className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </div>

                <div className="form-group pt-2 pb-2">
                    <label >Password</label>
                    <input type="password" required className="form-control" onChange={(e) => { setPassword(e.target.value)}} placeholder="Password" />
                </div>

                <div className="form-group pt-2 pb-2">
                    <label >Repeat Password</label>
                    <input type="password" required className="form-control" onChange={(e) => { setPasswordRepeated(e.target.value) }} placeholder="Repeat Password" />
                    <p className='text-danger'>{passwordError ? passwordError : signupError}</p>
                </div>
            </Row>
            <p className='text-center font-weight-light'><Link className='text-white text-muted' style={{ textDecoration: 'none' }} to={'/login'}>Ya tiene una cuenta? Logueate.</Link></p>
            <Row className='d-flex justify-content-center align-items-center' style={{ 'height': 75 }}>
                <Button className='w-25' type='submit'>Sign Up</Button>
            </Row>

        </form>
    )
};

export default SignUpForm;
