import { type } from "os";
import React from "react";
import { Dispatch } from "redux";
import { userApi } from "../user-api";

const GET_USER = 'GET-USERS'

type actionTypes = getUsersType | logoutType | autologinType | setDataUserType

type userDataType = { companyName: string, field: string, role: string, clientsCount: number, crmUsers: number }
export type stateUserType = {
    userToken: string | null,
    loggedIn: boolean,
    email: string,
    userId: string
    password: string,
    /*userData: {
        [key: string]: userDataType[]
    }*/
    companyName: string, field: string, role: string, clientsCount: number, crmUsers: number
}
type getUsersType = {
    type: 'SET-USERS',
    userToken: string | null,
    loggedIn: boolean

}
type logoutType = {
    type: 'LOGOUT',
    userToken: string | null,
    loggedIn: boolean
}

type autologinType = {
    type: 'AUTOLOGIN',
    userToken: string | null,
    loggedIn: boolean,
    email: string,
    password: string
}
type setDataUserType = {
    type: "SET-DATA-USER",
    email: string,
    userId: string,
    companyName: string,
    field: string,
    role: string,
    clientsCount: number,
    crmUsers: number
}

const initState = {

    userToken: null,
    loggedIn: false,
    email: '',
    userId: '',
    password: '',
    companyName: '',
    field: '',
    role: '',
    clientsCount: 0,
    crmUsers: 0
}



export const UserReducer = (state: stateUserType = initState, action: actionTypes): stateUserType => {
    switch (action.type) {
        case "SET-USERS": {

            return { ...state, userToken: action.userToken, loggedIn: true }
        }
        case "LOGOUT":

            localStorage.removeItem('userToken')
            return { ...state, userToken: null, loggedIn: false }
        case "AUTOLOGIN": {
            return { ...state, userToken: action.userToken, loggedIn: true, email: action.email, password: action.password }
        }
        case "SET-DATA-USER":
            return { ...state, }

        default:
            return state
    }
}


export const setUserAC = (userToken: string | null) => {
    debugger
    return { type: "SET-USERS", userToken }
}

export const logoutAC = () => {
    debugger
    return { type: "LOGOUT" }
}

export const autologinAC = (userToken: string | null, email: string, password: string) => {
    debugger
    return { type: "SET-USERS", userToken, email, password }
}
debugger
export const autologinTC = (userToken: string | null, email: string, password: string) => {
    return (dispatch: Dispatch) => {
        userApi.getUser(email, password)
        dispatch(autologinAC(userToken, 'test1@mail.ru', 'test11111'))


    }
}
export default UserReducer