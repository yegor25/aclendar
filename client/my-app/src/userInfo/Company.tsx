import React from "react";
import userInfoStyles from "./userInfoStyles";



export const Company = () => {
    const classes = userInfoStyles()
    return(
        <>
            
                                        <div  className= {classes.inputBox}>
                                            <div className= {classes.textItem}>Название компании</div>
                                            <input className= {classes.select} type="text" placeholder=""/>
                                        </div>
                                        <div className= {classes.inputBox}>
                                        <div className= {classes.textItem}>Отрасль</div>
                                            <select className= {classes.select}  name="industry" >
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                            </select>
                                        </div>
                                        <div className= {classes.inputBox}>
                                        <div className= {classes.textItem}>Ваша роль</div>
                                        <select className= {classes.select} name="role" >
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                                <option value="">Не выбрано</option>
                                            </select>
                                        </div>
                                        <div className= {classes.inputBox}>
                                        <div className= {classes.textItem}>Количество клиентов для ведения в CRM?</div>
                                            <input className= {classes.select} type="text" placeholder="Введите количество клиентов" />
                                        </div>
                                        <div className= {classes.inputBox}>
                                        <div className= {classes.textItem}>Сколько людей будут пользоваться CRM?</div>
                                            <input className= {classes.select} placeholder="Введите количество людей" type="text" />
                                        </div>
                                        </>                    
    )
}