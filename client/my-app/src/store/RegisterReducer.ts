import { type } from "os";
import React from "react";

export type stateRegisterType = {
    isRegister: boolean,
    userId: string
}
type actionType = actionRegisterType | setUserRegister

type actionRegisterType = {
    type: 'REGISTER-TYPE',
    isRegister: boolean,
    }
type setUserRegister = {
    type: 'SET-REGISTER-USER',
    userId: string
}

const initState = {
    isRegister: false,
    userId: ''
}

export const registerReducer = ( state: stateRegisterType = initState, action: actionType) => {
        debugger
        switch(action.type) {
            case 'REGISTER-TYPE':
                return { isRegister: action.isRegister}
            case 'SET-REGISTER-USER':
                return {...state, userId: action.userId}
            default:
                return state
        }
}

export const registerAC = (isRegister: boolean) => {
    debugger
    return  {type: 'REGISTER-TYPE', isRegister}
}

export const setRegisterUserAC = (userId: string) => {
    debugger
    return { type: 'SET-REGISTER-USER', userId}
}