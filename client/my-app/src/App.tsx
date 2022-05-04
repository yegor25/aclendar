import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Registration } from './registration/Registration';
import { Login } from './registration/Login';
import { MainPage } from './mainPage/MainPage';
import Greeting from './greeting/Greeting';
import { Navbar } from './Navbar/Navbar';
import { UserInfo } from './userInfo/UserInfo';
import {  setUserAC, stateUserType } from './store/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './store/storeRedux';
import { log } from 'console';
import { registerAC, stateRegisterType } from './store/RegisterReducer';


function App() {
  const [user, setUser] = useState(false)
  const userState = useSelector<AppRootState, stateUserType>(state => state.user)
  const register = useSelector<AppRootState, stateRegisterType>(state => state.register)

  const dispatch = useDispatch()



  useEffect(() => {
    const userToken = localStorage.getItem('userToken')
    if (userToken) {
      const userId = localStorage.getItem('userId')
      debugger
      dispatch(setUserAC(userToken, userId))
    }
    


  }, [])
  useEffect(() => {
    if (register.isRegister === true) {
      dispatch(registerAC(true))
    }
  }, [])

  const isAuth = (userAuth: boolean) => {
    setUser(userAuth)
  }
 
  console.log('rregister', register.isRegister);

  return (
    <div className="App">
      <div className="mainContainer">
        <div>
          <Navbar loggedIn = {userState.loggedIn}/>
        </div>

        <div className='content'>


          <Routes>
            {
              userState.loggedIn
                ? <Route path='/main' element={<MainPage isAuth={isAuth} loggedIn={userState.loggedIn} userId={userState.userId} />}></Route>
                : <Route path='/login' element={<Login isAuth={isAuth}  loggedIn={userState.loggedIn} />}></Route>
            }
            <Route path='/register' element={<Registration />}></Route>

            {
              < Route path='*' element={<Navigate to={userState.loggedIn ? "/main" : "/login"} />}> </Route>
            }
            {/* <Route path='/userInfo' element={<UserInfo />} ></Route> */}
            {register.isRegister && <Route path='/userInfo' element={<UserInfo userId = {register.userId} />} ></Route>}
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
