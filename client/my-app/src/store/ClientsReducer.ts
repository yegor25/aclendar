import axios from "axios";
import { type } from "os";
import { stringify } from "querystring";
import React from "react";
import { Dispatch } from "redux";
import { v1 } from "uuid";


export type clientsStateType = {
    id: string,
    owner: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: number | null,
    gender: string,
    birthday: Date | null,
    agreement: boolean
}

type clientActionsType = addClientType | removeClientType | setClientType | searchType

type addClientType = {
    type: 'ADD-CLIENT',
    owner: string,
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: number | null,
    gender: string,
    birthday: Date | null,
    agreement: boolean
}
type setClientType = {
    type: 'SET-CLIENTS',
    state: clientsStateType[],

}

type removeClientType = {
    type: 'REMOVE-CLIENT',
    id: string
}
type searchType = {
    type: 'SEARCH',
    surname: string,
    state: clientsStateType[]
}

const initState: clientsStateType[] = [
]
export const ClientReducer = (state: clientsStateType[] = initState, action: clientActionsType): clientsStateType[] => {
    debugger

    switch (action.type) {
        case 'ADD-CLIENT':
            return [...state, { owner: action.owner, id: action.id, name: action.name, surname: action.surname, patronymic: action.patronymic, phone: action.phone, gender: action.gender, birthday: action.birthday, agreement: action.agreement }]
        case 'SET-CLIENTS':

            return [...action.state.map(el => {
                //@ts-ignore
                return { ...el, id: el._id }
            })]

        case 'REMOVE-CLIENT':

            return state.filter(st => st.id !== action.id)
        case 'SEARCH': 
            let copyState = [...state]
            let needClient = copyState.find(cl => cl.surname === action.surname  )
           return state
        default:
            return state
    }
}


const addClientAC = (owner: string, id: string, name: string, surname: string, patronymic: string, phone: number | null, gender: string, birthday: Date | null, agreement: boolean) => {
    return { type: 'ADD-CLIENT', owner, id, name, surname, patronymic, phone, gender, birthday, agreement }
}

const removeClientAC = (id: string) => {
    return { type: 'REMOVE-CLIENT', id }
}
export const setClientsAC = (state: clientsStateType[]): setClientType => {
    debugger
    console.log('state',);

    return { type: 'SET-CLIENTS', state }
}

export const addClientTC = (name: string, surname: string, patronymic: string, phone: number | null, gender: string, birthday: Date | null, agreement: boolean, userId: string | null) => {
    return (dispatch: Dispatch) => {
        axios.post('http://localhost:3002/api/clients/add', { name, surname, patronymic, phone, gender, birthday, agreement, userId })
            .then((res) => {
                dispatch(addClientAC(res.data.owner, res.data._id, res.data.name, res.data.surname, res.data.patronymic, res.data.phone, res.data.gender, res.data.birthday, res.data.agreement))
            })
    }
}
export const removeClientTC = (id: string) => {
    return (dispatch: Dispatch) => {
        axios.delete(`http://localhost:3002/api/clients/delete/${id}`)
            .then((res) => {
                console.log('deleletee', res);
                dispatch(removeClientAC(res.data._id))
            })
    }
}