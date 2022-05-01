import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import axios from "axios";
import { type } from "os";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAC, setUserAC } from "../store/UserReducer";
import { useStyles } from "./loginStyles";

type loginPropsType = {
    isAuth: (userAuth: boolean) => void,
    getId: (userId: string) => void,
    loggedIn: boolean
}


export const Login = (props: loginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    console.log(errorMessage);
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function loginUser() {
        const response = axios.post('http://localhost:3002/api/auth/login', { email, password })
            .then(res => {

                if (res.data.token) {
                    props.isAuth(true)
                    props.getId(res.data.userId)
                    localStorage.setItem('userToken', res.data.token)
                    dispatch(setUserAC(res.data.token))
                    navigate('/main')

                }
            }

            )
            .catch((error: any) => {
                if (error.response.data.message === "Пароли не совпадают") {
                    setErrorMessagePassword('Ввели неверный пароль')
                } else {
                    setErrorMessage(error.response.data.message)

                }
            })
    }
    return (
        <div className={classes.loginContainer}>

            <div className={classes.loginBox}>
                <div className={classes.titleContainer}>
                    <div className={classes.h1}>Войдите в аккаунт</div>
                    <div className={classes.description}>Для входа введите email и пароль</div>
                </div>
                <div className={classes.body}>
                    <form onSubmit={(e: { preventDefault: () => void; }) => e.preventDefault()} action="">
                        <div className={classes.email} >
                            <span className={classes.emailTitle}>Email</span>
                            <input className={classes.input} value={email} onChange={e => {
                                setErrorMessage('')
                                setEmail(e.currentTarget.value)
                            }} type="email" placeholder="snehal.hule@webvarad.com" />
                            <div className= {classes.error}>{errorMessage}</div>
                        </div>
                        <div className={classes.password}>
                            <span className={classes.emailTitle}>Пароль</span>
                            <input className={classes.input} value={password} onChange={e => {
                                setErrorMessagePassword('')
                                setPassword(e.currentTarget.value)
                            }} type="password" placeholder="*********" />
                            <div className= {classes.error}>{errorMessagePassword}</div>
                        </div>
                    </form>

                </div>
                <div className={classes.footer}>
                    <button onClick={loginUser} className={classes.btn}>Войти</button>
                    <div className={classes.offer}>Нет аккаунта?
                        <Link className={classes.link} to={'/register'}> Зарегистрируйтесь</Link>

                    </div>
                </div>

            </div>






        </div>
    )
}

export default Login