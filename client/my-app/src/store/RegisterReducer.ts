import React from "react";

export type stateRegisterType = {
    isRegister: boolean
}

type actionType = {
    type: 'REGISTER-TYPE',
    isRegister: boolean
}

const initState = {
    isRegister: false
}

export const registerReducer = ( state: stateRegisterType = initState, action: actionType) => {
        debugger
        switch(action.type) {
            case 'REGISTER-TYPE':
                return { isRegister: action.isRegister}
            default:
                return state
        }
}

export const registerAC = (isRegister: boolean) => {
    debugger
    return  {type: 'REGISTER-TYPE', isRegister}
}