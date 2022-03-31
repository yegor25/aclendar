import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Registration } from './registration/Registration';
import { Login } from './registration/Login';
import { MainPage } from './MainPage';
import Button from '@mui/material/Button/Button';
import MenuAppBar from './greeting/Greeting';
import FabIntegrationSnackbar from './greeting/Greeting';
import BoxSx from './greeting/Greeting';
import Greeting from './greeting/Greeting';
import { Navbar } from './Navbar/Navbar';
import { makeStyles } from '@mui/material';
import { UserInfo } from './userInfo/UserInfo';
import { ForMe } from './userInfo/ForMe';
import { autologinAC, autologinTC, setUserAC, stateUserType } from './store/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './store/storeRedux';
import { log } from 'console';
import { registerAC, stateRegisterType } from './store/RegisterReducer';


function App() {
  const [user, setUser] = useState(false)
  const [id, setId] = useState('')
  const userState = useSelector<AppRootState, stateUserType>(state => state.user)
  const register = useSelector<AppRootState, stateRegisterType>(state => state.register)

  const dispatch = useDispatch()



  useEffect(() => {
    const userToken = localStorage.getItem('userToken')
    if (userToken) {
      debugger
      dispatch(setUserAC(userToken))
    }
    /* setTimeout(() => {
       localStorage.removeItem('userToken')
     }, 10000)*/


  }, [])
  useEffect(() => {
    if (register.isRegister === true) {
      dispatch(registerAC(true))
    }
  }, [])

  const isAuth = (userAuth: boolean) => {
    setUser(userAuth)
  }
  const getId = (userId: string) => {
    setId(userId)
  }
  console.log('rregister', register.isRegister);

  return (
    <div className="App">
      <div className="mainContainer">
        <div>
          <Navbar />
        </div>

        <div className='content'>


          <Routes>
            {
              userState.loggedIn
                ? <Route path='/main' element={<MainPage isAuth={isAuth} loggedIn={userState.loggedIn} userId={id} />}></Route>
                : <Route path='/login' element={<Login isAuth={isAuth} getId={getId} loggedIn={userState.loggedIn} />}></Route>
            }
            <Route path='/register' element={<Registration />}></Route>

            {
              < Route path='*' element={<Navigate to={userState.loggedIn ? "/main" : "/login"} />}> </Route>
            }
            {/* <Route path='/userInfo' element={<UserInfo />} ></Route> */}
            {register.isRegister && <Route path='/userInfo' element={<UserInfo />} ></Route>}
            <Route path='/greeting' element={<Greeting />}></Route>


            {/*<Route path='/greeting' element={<Greeting />}></Route>
              <Route path='/register' element={<Registration />}></Route>
              <Route path='/main' element={<MainPage isAuth={isAuth} userId={id} />}></Route>
              <Route path='/login' element={<Login isAuth={isAuth} getId={getId} />}></Route>
             {/* <Route path='*' element={<Navigate to={!!userState.userToken ? "/main" : "/login"} />}></Route>*/}
            {/* <Route path='/userInfo' element={<UserInfo />} ></Route>*/}
          </Routes>

        </div>

      </div>

    </div >
  );
}

export default App;
