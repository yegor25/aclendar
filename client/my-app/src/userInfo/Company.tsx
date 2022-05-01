import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  setDataUserTC } from "../store/UserReducer";
import userInfoStyles from "./userInfoStyles";

type companyPropsType = {
    userId: string
}

export const Company = ( props: companyPropsType) => {
    const classes = userInfoStyles()
    const dispatch = useDispatch()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        dispatch( setDataUserTC(props.userId ,data) )
        navigate('/greeting')
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Название компании</div>
                    <input {...register('companyName')} className={classes.select} type="text" placeholder="" />
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Отрасль</div>
                    <select {...register('industry')} className={classes.select} name="industry" >
                        <option value="Стоматология">Стоматология</option>
                        <option value="Красота и тело">Красота и тело</option>
                        <option value="Ремонт">Ремонт</option>
                        <option value="Обслуживание">Обслуживание</option>
                        <option value="Не выбрано">Не выбрано</option>
                    </select>
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Ваша роль</div>
                    <select {...register('role')} className={classes.select} name="role" >
                        <option value="Работник">Работник</option>
                        <option value="Руководитель">Руководитель</option>
                        <option value="Основатель">Основатель</option>
                        <option value="Не выбрано">Не выбрано</option>
                    </select>
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Количество клиентов для ведения в CRM?</div>
                    <input {...register('clientsCount')} className={classes.select} type="number" placeholder="Введите количество клиентов" />
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Сколько людей будут пользоваться CRM?</div>
                    <input {...register('crmUsers')} className={classes.select} placeholder="Введите количество людей" type="number" />
                    <div>
                        <button type="submit" className={classes.btnEnd}>Завершить регистрацию</button>
                    </div>
                </div>
            </form>

        </>
    )
}