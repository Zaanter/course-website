import { Button, Container } from 'react-bootstrap';

import React from 'react'
import { getAuth } from 'firebase/auth';

const HomeScreen: React.SFC<{}> = () => {

    const logout = () => {
        const auth = getAuth()
        auth.signOut()
    }
    return (
        <Container>
            <h1>Estoy logueado!</h1>
            <Button onClick={() => logout()}>Logout</Button>
        </Container>
    )
};

export default HomeScreen;
