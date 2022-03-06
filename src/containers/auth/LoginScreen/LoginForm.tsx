import './style.css'

import { Button, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

import { AuthContext } from '../../../context/AuthContext';
import { FirebaseError } from 'firebase/app';
import firebaseErrorHandler from '../../../utils/firebaseErrorHandler'

interface Props { }

const LoginForm = (props: Props): JSX.Element => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    //@ts-ignore
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        auth.emailSignIn(email, password, () => {
          navigate(from, { replace: true });
        }, (e:FirebaseError) => {
            setLoginError(firebaseErrorHandler(e))
        });
    }

    return (
        <form id='loginForm' onSubmit={handleSubmit}>
            <Row className='text-center'>
                <h2>Login</h2>
            </Row>
            <Row>
                <div className="form-group pt-2 pb-2">
                    <label className='pb-1'>Email</label>
                    <input required type="text" className="form-control" onChange={(e) => setEmail(e.target.value) } placeholder="Email" />
                </div>

                <div className="form-group pt-2 pb-2">
                    <label >Password</label>
                    <input required type="password" className="form-control" onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
                    <p className='text-danger'>{loginError ? loginError : ''}</p>
                </div>
            </Row>
            
            <p className='text-center font-weight-light'><Link className='text-white text-muted' style={{ textDecoration: 'none' }} to={'/signup'}> Aún no tienes cuenta? Registrate.</Link></p>
            
            <Row className='d-flex justify-content-center align-items-center' style={{ 'height': 75 }}>
                <Button className='w-25' type='submit'>Loguear</Button>
            </Row>

        </form>
    )
};

export default LoginForm;
