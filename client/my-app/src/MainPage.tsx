import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button/Button";
import Fab from "@mui/material/Fab/Fab";
import Input from "@mui/material/Input/Input";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { type } from "os";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton/IconButton';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {  logoutAC, setUserAC } from './store/UserReducer';
type dataType = {
    userId: string,
    isAuth: (user: boolean) => void,
    loggedIn: boolean
}
type ClientsType = {
    _id: string,
    name: string,
    surname: string
}

const useStyles = makeStyles({
    btnShow: {
        marginTop: '20px'
    },
    btnAdd: {
        marginLeft: '10px'
    }
})
export const MainPage = (props: dataType) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        surname: '',

    })

    const [clients, setClients] = useState<Array<ClientsType>>([])
    const [loading, setLoading] = useState(false)

    const classes = useStyles()

   
    console.log('засэтаные клиенты', clients);

    console.log(form);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
}
    const addClient = useCallback(async () => {
        try {

            console.log(form);

            const data = { ...form }
            await axios.post('/api/clients/add', { ...form, userId: props.userId })
                .then(res => {
                    console.log(res);

                })

        } catch (error) {

        }
    }, [form])
    const getClients = useCallback(async () => {
        setLoading(true)
        try {
            await axios.get('/api/clients/', {
                params: { userId: props.userId }
            })

                .then(res => {

                    console.log('before', clients);
                    setLoading(false)
                    setClients(res.data)



                }
                )



        } catch (error) {

        }
        ;

    }, [props.userId])

    const deleteClients = useCallback(async (id: string) => {
        await axios.delete(`/api/clients/delete/${id}`)
            .then(() => getClients())
    }, [])

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={() => {
              dispatch(logoutAC())
                props.isAuth(false)
            }
            }>выйти</button>
            <button onClick={ () => {localStorage.removeItem('userToken')}}>remove</button>
            <form action="" onSubmit={e => e.preventDefault()}>
                <TextField
                    id="outlined-name"
                    label="Name"
                    value={form.name}
                    onChange={changeHandler}
                    name="name"
                />
                <TextField
                    id="outlined-name"
                    label="Surname"
                    value={form.surname}
                    onChange={changeHandler}
                    name="surname"
                />
                <Fab className={classes.btnAdd} color="primary" onClick={addClient} size="medium" aria-label="add">
                    +
                </Fab>


            </form>
            <div>

                <LoadingButton
                    className={classes.btnShow}
                    size="small"
                    color="secondary"
                    onClick={getClients}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Показать клиентов
                </LoadingButton>

            </div>
            <div>

                {

                    clients.map(cl => {
                        return (
                            <div key={cl._id}>
                                {cl.name}
                                <span> {cl.surname}</span>
                                <IconButton aria-label="delete" disabled color="primary" />
                                <DeleteIcon onClick={() => deleteClients(cl._id)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}