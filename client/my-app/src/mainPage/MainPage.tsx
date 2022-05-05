import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button/Button";
import Fab from "@mui/material/Fab/Fab";
import Input from "@mui/material/Input/Input";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { type } from "os";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import iconSearch from './assets/iconSearch.svg'
import crown from '../assets/crowne.svg'
import sort from './assets/sort.svg'
import man from '../assets/man.svg'
import filter from '../assets/filter.svg'
import Avatar from '../assets/Avatar.svg'
import setting from '../assets/setting.svg'
import update from '../assets/update.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton/IconButton';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAC, setUserAC } from '../store/UserReducer';
import { NewClient } from './NewClient';
import { RemoveCard } from './RemoveCard';
import { AppRootState } from '../store/storeRedux';
import { clientsStateType, setClientsAC } from '../store/ClientsReducer';
import { Sort } from './Sort';
type dataType = {
    userId: string | null,
    isAuth: (user: boolean) => void,
    loggedIn: boolean
}
type ClientsType = {
    _id: string,
    name: string,
    surname: string
}

export const useStyles = makeStyles({
    wrapper: {
        height: '100%',
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

    },
    btnShow: {
        marginTop: '20px'
    },
    btnAdd: {
        marginLeft: '10px'
    },
    mainContent: {
        maxHeight: '524px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid red',
        padding: '24px',
        position: 'relative',

    },
    top: {
        minWidth: '100%',
        minHeight: '172px',
        border: '1px solid blue',

    },
    search: {
        border: '2px solid black',
        display: 'flex',
        minWidth: '100%',
        height: '44px',
        justifyContent: 'space-between',
    },
    inp: {
        maxHeight: '100%',
        width: '276px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        //background: `url('${iconSearch}') no-repeat`,
        backgroundSize: '10%',
        backgroundPosition: '0 50%',
        textAlign: 'center',
        background: '#F4F6FA',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
        border: 'none'

    },
    settings: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid blue',
        width: '283px',
        marginLeft: '533px'
    },
    btn: {
        background: '#598866',
        width: '223px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        marginLeft: '0px'
    },


    update: {
        display: 'block',
        marginLeft: '4px',
        fontWeight: 600,
        fontSize: '12px',
        color: '#FFFFFF'

    },
    setting: {
        width: '44px',
        height: '44px',
        display: 'flex',
        margin: '0px auto'
    },
    btnSetting: {
        background: '0',
        border: 'none'
    },
    title: {
        marginTop: '24px',
        border: '1px solid red',
        color: '#262626',

        fontWeight: 600,
        fontSize: '18px',
    },
    sort: {
        maxWidth: '100%',
        height: '68px',
        border: '1px solid green',
        marginTop: '12px',
        padding: '12px',
        display: 'flex',
        background: '#F8F8F8',
        alignItems: 'center'

    },
    sortContent: {
        width: '100%',
        border: '1px solid blue',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    statistics: {
        border: '1px solid black',
        height: '100%',
        width: '584px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        background: '#FFFFFF',
        height: '100%',
        width: '120px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSort: {
        background: '#FFFFFF',
        height: '100%',
        width: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filter: {
        height: '100%',
        width: '100%',
        background: '#FFFFFF',
        border: '#FFFFFF',
        borderRadius: '8px',

    },
    searchClient: {
        width: '276px',
        height: '44px',
        border: 'none',
        borderRadius: '8px'
    },
    filterImage: {
        borderRadius: '8px'
    },
    btnNew: {
        height: '40px',
        width: '200px',
        borderRadius: '8px',
        background: '#5D5FEF',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        display: 'block',
        marginLeft: '8px'
    },
    clients: {
        width: '100%',
        height: '280px',
        marginTop: '24px',
        border: '2px solid pink'
    },
    clientsHeader: {
        width: '100%',
        borderRadius: '8px',
        background: '#262626',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexBasis: 'auto'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: 600,
        display: 'flex',
        width: '136.5px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clientsContent: {
        width: '100%',
        minHeight: '216px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    clientInfo: {
        display: 'flex',
        height: '64px',
        justifyContent: 'space-between'
    },
    clientField: {
        height: '100%',
        width: '136.5px',
        border: '1px solid orange',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clientText: {
        fontSize: '12px',
        fontWeight: 600,
        fontFamily: 'mont',
        color: '#292929'
    },
    clientBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '107px',
        height: '36px',
        color: '#5D5FEF',
        borderRadius: '8px',
        borderColor: '#5D5FEF',
        background: 0
    },
    btnIcon: {
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 0
    },
    name: {
        color: '#292929',
        fontSize: '12px',
        textAlign: 'start',
        marginLeft: '10px'
    },
    avatar: {
        marginLeft: '12px'
    },
    deleteIcon: {
        marginLeft: '8px'
    },
    modalActive: {
        background: 'rgba(0, 0, 0, 0.33)'
    },
    sortActive: {
        width: '120px',
        height: '115px',
        borderRadius: '8px',
        background: '#FFFFFF'
    }
})
export const MainPage = (props: dataType) => {
    const dispatch = useDispatch()



    const [modal, setModal] = useState(false)
    const [remove, setRemove] = useState(false)
    const [clientId, setClientId] = useState<string>('')
    const [sort, setSort] = useState<boolean>(false)
    const classes = useStyles()
    const modalClass = modal || remove || sort ? classes.modalActive : ''

    const client = useSelector<AppRootState, clientsStateType[]>(state => state.client)

    const [clients, setClients] = useState<Array<clientsStateType>>(client)


    const removeClient = (clientsId: string) => {
        setRemove(true)
        setClientId(clientsId);
    }

    const addNewClient = useCallback(async () => {
        try {
            setModal(true)
        } catch (error) {

        }
    }, [])
    useEffect(() => {
        try {
            debugger
            axios.get('/api/clients/', {
                params: { userId: props.userId }
            })
                .then((res) => {
                    console.log('userssssssss', (res.data));
                    debugger
                    dispatch(setClientsAC(res.data.clients))
                })
        } catch (error) {

        }
        setClients(client)
    }, [client.length])

    const searchClient = (e: ChangeEvent<HTMLInputElement>) => {
        setClients(client.filter(cl => cl.surname.includes(e.currentTarget.value)))
    }
  

    return (
        <div className={`${classes.wrapper} ${modalClass}`}>
            <div className={classes.mainContent}>
                {modal && <NewClient userId={props.userId} modal={modal} setModal={setModal} />}
                {remove && <RemoveCard clientId={clientId} remove={remove} setRemove={setRemove} />}
                <div className={classes.top}>
                    <div className={classes.search}>
                        <div className={classes.inp}>
                            <input placeholder='Найти на сайте' className={classes.input} type="text" />
                        </div>
                        <div className={classes.settings}>
                            <button className={classes.btn}>
                                <img src={crown} alt="" />
                                <span className={classes.update}>Обновить до PRO</span>
                            </button>
                            <div className={classes.setting}>
                                <button className={classes.btnSetting}>
                                    <img src={setting} alt="" />

                                </button>

                            </div>
                        </div>

                    </div>
                    <div className={classes.title}>Клиенты</div>
                    <div className={classes.sort}>
                        <div className={classes.sortContent}>
                            <div  className={classes.statistics}>
                                <div className={classes.item}>Всего: {client.length}</div>
                                <div className={classes.item}>Новых: 2</div>
                                <div  className={classes.btnSort}>
                                    <div >
                                        {sort && <Sort  sort ={sort} setSort = {setSort}/>}

                                    </div>
                                    <button onClick={() => setSort(true)} className={classes.filter}>
                                        <img className={classes.filterImage} src={filter} alt="" />
                                    </button>
                                </div>
                                <div><input onChange={searchClient} placeholder='Найти клиентов' className={classes.searchClient} type="text" /></div>
                            </div>
                            <button onClick={addNewClient} className={classes.btnNew}>
                                <img src={man} alt="" />
                                <span className={classes.text}>Новый клиент</span>
                            </button>
                        </div>
                    </div>
                    <div className={classes.clients}>
                        <div className={classes.clientsHeader}>
                            <div className={classes.headerText}>ФИО</div>
                            <div className={classes.headerText}>Телефон</div>
                            <div className={classes.headerText}>Визитов</div>
                            <div className={classes.headerText}>Последний визит</div>
                            <div className={classes.headerText}>Оплачено</div>
                            <div className={classes.headerText}>Баланс</div>
                            <div className={classes.headerText}>Действие</div>
                            <div className={classes.headerText}></div>
                        </div>
                        <div className={classes.clientsContent}>
                            {

                                clients.map(cl => {
                                    debugger
                                    return (
                                        <div className={classes.clientInfo}>
                                            <div className={classes.clientField}>
                                                <div className={classes.avatar}>
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className={classes.name}>
                                                    {cl.name} {cl.surname} {cl.patronymic}
                                                </div>
                                            </div>
                                            <div className={`${classes.clientField} ${classes.clientText}`}>{cl.phone} </div>
                                            <div className={`${classes.clientField} ${classes.clientText}`}>2</div>
                                            <div className={`${classes.clientField} ${classes.clientText}`}>{cl.birthday}</div>
                                            <div className={`${classes.clientField} ${classes.clientText}`}>12000</div>
                                            <div className={`${classes.clientField} ${classes.clientText}`}>2000</div>
                                            <div className={classes.clientField}> <button className={classes.clientBtn}>Записать</button></div>
                                            <div className={classes.clientField}>
                                                <button className={classes.btnIcon}><img src={update} alt="" /></button>
                                                <button onClick={() => {

                                                    console.log(cl.id);

                                                    removeClient(cl.id)
                                                }} className={`${classes.btnIcon} ${classes.deleteIcon}`}><img src={deleteIcon} alt="" /></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                dispatch(logoutAC())
                props.isAuth(false)
            }
            }>выйти</button>

        </div>
    )
}