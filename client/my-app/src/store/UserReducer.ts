import axios from "axios";
import { type, userInfo } from "os";
import React from "react";
import { Dispatch } from "redux";
import { userApi } from "../user-api";

const GET_USER = 'GET-USERS'

type actionTypes = getUsersType | logoutType | autologinType | setDataUserType

type userInfoType = {
    companyName: string,
    field: string,
    role: string,
    clientsCount: number,
    crmUsers: number
}
export type stateUserType = {
    userToken: string | null,
    loggedIn: boolean,
    email: string,
    userId: string | null
    password: string,
    userInfo: userInfoType
}
type getUsersType = {
    type: 'SET-USERS',
    userToken: string | null,
    loggedIn: boolean,
    userId: string | null
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
    userInfo: userInfoType
}

const initState = {

    userToken: null,
    loggedIn: false,
    email: '',
    userId: '',
    password: '',
    userInfo: {
        companyName: '',
        field: '',
        role: '',
        clientsCount: 0,
        crmUsers: 0
    },

}



export const UserReducer = (state: stateUserType = initState, action: actionTypes): stateUserType => {
    switch (action.type) {
        case "SET-USERS": {
            debugger
            return { ...state, userToken: action.userToken, loggedIn: true, userId: action.userId }
        }
        case "LOGOUT":

            localStorage.removeItem('userToken')
            return { ...state, userToken: null, loggedIn: false }
       
        case "SET-DATA-USER":
            debugger
            return { ...state, userInfo: action.userInfo }

        default:
            return state
    }
}


export const setUserAC = (userToken: string | null, userId: string | null) => {
    debugger
    return { type: "SET-USERS", userToken, userId}
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
 const setDataUserAC = (userInfo: userInfoType) => {
    return { type: 'SET-DATA-USER', userInfo }
}
debugger
export const setDataUserTC = (userId :string, userInfo: userInfoType) => {
    debugger
    return (dispatch: Dispatch) => {
        axios.post('http://localhost:3002/api/auth/userInfo', {userId, userInfo})
        .then( (res) => {
            console.log('userInfo', res)
            dispatch(setDataUserAC(res.data.userInfo))
        })
    }
}
export default UserReducer