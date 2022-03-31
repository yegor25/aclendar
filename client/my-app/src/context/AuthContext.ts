import { createContext } from "vm";
const vm = require('vm')

function noop(){}

/*export const AuthContext = createContext( {
    token:null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})*/