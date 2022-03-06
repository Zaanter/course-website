import './global.css'

import { Route, Routes } from 'react-router-dom';

import HomeScreen from './containers/user/HomeScreen';
import LoginScreen from './containers/auth/LoginScreen';
import React from 'react'
import RequireAuth from './components/RequireAuth';
import SignUpScreen from './containers/auth/SignUpScreen';

const App = (): JSX.Element => {
        return(
            <Routes>
                <Route path="/" element={<RequireAuth>
                                            <HomeScreen />
                                        </RequireAuth>} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
            </Routes>
        )
}
export default App;


// const [isLoading, setIsLoading] = useState(true)
//     const [user, setUser] = useState(null)
    
//     const auth = getAuth();

//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser)
//     })

//     useEffect(() => {
//         setIsLoading(false)
//     },[])

//     if(!isLoading){
//         if(user){
//             return (
//                 <Home></Home>
//             )
//         }else{
//             return (
//                 <Login></Login>
//             )
//         }
//     }else{
//         return( <Spinner animation='border'></Spinner>)
//     }
    
// };
