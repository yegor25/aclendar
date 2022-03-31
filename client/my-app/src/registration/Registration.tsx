import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@mui/lab/Alert/Alert";
import React from "react";



import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAC } from "../store/RegisterReducer";

const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: '20px',
        width: '25%',
        marginLeft: '890px',


    },
    content: {
        //width: '100%',

        color: 'red',
        fontWeight: 'bolder',

    },
    btn: {
        marginTop: '20px'
    },
    registerContent: {

        width: '325px',
        height: '532px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bodyTitle: {
        width: '100%',
        //height: '88px',
        display: 'flex',
        flexDirection: 'column'
    },
    email: {
        display: 'flex',
        flexDirection: 'column'
    },
    password: {
        display: 'flex',
        flexDirection: 'column'
    },
    confirm: {
    },
    h3: {
        fontSize: '28px',
        color: '#262626',
        fontWeight: 600,
        display: 'flex'

    },
    description: {
        maxWidth: '201px',
        fontSize: '14px',
        color: '#262626',
        fontWeight: 600,
        display: 'flex',
        textAlign: 'start',
        marginTop: '4px'
    },
    emailTitle: {
        position: 'relative',
        width: '45px',
        fontFamily: 'Mont',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',


        color: '#262626'
    },
    input: {
        //height: '50px',
        background: '#FFFFFF',
        border: '1px solid rgba(228, 228, 228, 0.9)',
        boxSizing: 'border-box',
        borderRadius: '8px',
        padding: '16px 20px'

    },
    confirmTitle: {
        width: '100%',
        textAlign: 'start'
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',

        width: '325px',
        height: '48px',
        background: '#5D5FEF',
        borderRadius: '8px',
        justifyContent: 'center',
        color: 'white',
        fontSize: 'white',
        fontWeight: 600
    },
    footer: {
        height: '94px',
        width: '100%',
    },
    offer: {
        fontWeight: 400,
        fontSize: '14px',
        textAlign: 'center',
        color: '#262626',

    },
    link: {
        textDecoration: 'none',
        color: '#5D5FEF'
    },
    footerText: {
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'center'
    }
});

export const Registration = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    //const [errorMessage, setErrorMessage] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    function registerUser() {
        const data = { email, password }
        axios.post('http://localhost:3002/api/auth/register', data)
            .then((res) => {
                console.log(res);
                dispatch(registerAC(true))
                navigate('/userInfo')
            })
           .catch((error) => {
                setError(error.response.data.message);
               //setErrorMessage(true)
               dispatch(registerAC(false))
            })
    }
    return (
        <div>
            <div className={classes.registerContent}>
                <div className={classes.bodyTitle}>
                    <div className={classes.h3}>
                        Регистрация
                    </div>

                    <div className={classes.description}>Для создания аккаунта введите email и пароль.</div>
                </div>
                
                    <div className={classes.email}>
                        <span className={classes.emailTitle}>Email</span>
                        <input value={email} onChange={e => setEmail(e.currentTarget.value)} className={classes.input} type="email" placeholder="snehal.hule@webvarad.com" />
                    </div>
                    <div className={classes.password}>
                        <span className={classes.emailTitle}>Пароль</span>
                        <input value={password} onChange={e => setPassword(e.currentTarget.value)} className={classes.input} type="password" placeholder="*********" />
                    </div>
                    <div className={classes.password}>
                        <span className={`${classes.emailTitle} ${classes.confirmTitle}`}>Подтвердите пароль</span>
                        <input className={classes.input} type="password" placeholder="*********" />
                    </div>
               
                <div>{error}</div>
                <div className={classes.footer}>
                    <button onClick={registerUser} className={classes.button}>Зарегистрироваться</button>
                    <div className={classes.offer}>
                        <div className={classes.footerText}>
                            Есть аккаунт?
                            <Link className={classes.link} to={'/login'}> Войдите</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}