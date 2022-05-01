import { type } from "os";
import React from "react";
import { v1 } from "uuid";


export type clientsStateType = {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: number | null,
    gender: string,
    birthday: Date | null,
    agreement: boolean
}

type clientActionsType = addClientType | removeClientType

type addClientType = {
    type: 'ADD-CLIENT',
    name: string,
    surname: string,
    patronymic: string,
    phone: number | null,
    gender: string,
    birthday: Date | null,
    agreement: boolean
}

type removeClientType = {
    type: 'REMOVE-CLIENT',
    id: string
}

const initState = [
    { id: v1(), name: '', surname: '', patronymic: '', phone: null, gender: '', birthday: null, agreement: false }
]

export const ClientReducer = (state: clientsStateType[] = initState, action: clientActionsType) => {
    switch (action.type) {
        case 'ADD-CLIENT':
            return [...state, { id: v1(), name: action.name, surname: action.surname, patronymic: action.patronymic, phone: action.phone, gender: action.gender, birthday: action.birthday, agreement: action.agreement }]
        case 'REMOVE-CLIENT':
            return state.filter(st => st.id != action.id)
        default:
            return state
    }
}


export const addClientAC = (name: string, surname: string, patronymic: string, phone: number | null, gender: string, birthday: Date | null, agreement: boolean) => {
    return { type: 'ADD-CLIENT', name, surname, patronymic, phone, gender, birthday, agreement }
}

export const removeClientAC = (id: string) => {
    return { type: 'REMOVE-CLIENT', id }
}