import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataUserTC } from "../store/UserReducer";
import userInfoStyles from "./userInfoStyles";

type propsForMeType = {
    userId: string
}

export const ForMe = (props: propsForMeType) => {
    const classes = userInfoStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()
    const onSubmit = (data: any) => {
        dispatch(setDataUserTC(props.userId, data))
        navigate('/greeting')

    }
    return (
        <div className={classes.miniBox}>
            <form onSubmit={handleSubmit(onSubmit)} action="">
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
                    <div className={classes.textItem}>Количество клиентов для ведения в CRM?</div>
                    <input {...register('clientsCount')} className={classes.select} type="number" placeholder="Введите количество клиентов" />
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.textItem}>Сколько людей будут пользоваться CRM?</div>
                    <input {...register('crmUsers')} className={classes.select} placeholder="Введите количество людей" type="number" />
                </div>
                <div>
                    <button type="submit" className={classes.btnEnd}>Завершить регистрацию</button>
                </div>
            </form>

        </div>
    )
}