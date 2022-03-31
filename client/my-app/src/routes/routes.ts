import path from "path/posix";
import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

export const useRoutes = (isLogin:boolean) => {
    const navigate = useNavigate()
    if(isLogin) {
        return (
            navigate('/main')
        )
    }
} 