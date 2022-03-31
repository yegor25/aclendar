import axios from "axios";
import React from "react";


type userType = {
    email: string,
    password: string
}
export const userApi = {
    getUser (email: string, password:string) {
        axios.post<userType>('http://localhost:3002/api/auth/login', { email, password } )
        
    }
}