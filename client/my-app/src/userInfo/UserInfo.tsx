import React, { useState } from "react";
import userInfoStyles from './userInfoStyles'
import vector from '../assets/Vector 1.svg'
import { Link, Route, Routes } from "react-router-dom";
import { ForMe } from "./ForMe";
import { type } from "os";
import { Company } from "./Company";
type stateType = ReturnType<typeof ForMe | typeof Company>

export const UserInfo = () => {
    const classes = userInfoStyles()
    const [state, setState] = useState<stateType>(<Company />)
    const [style, setStyle] = useState<any>(classes.container)

    const [active, setActive] = useState<boolean>(false)
    console.log(state.type.name);

    const act = state.type.name === 'ForMe' ? classes.active : ''
    const act2 = state.type.name === 'Company' ? classes.active : ''
    return (
        <div className={style}>

            <div className={classes.description}>
                <div className={classes.request}>
                    Пожалуйста, ответьте  на <br />несколько вопросов
                    для <br />  настройки вашего аккаунта
                </div>
                <div className={classes.instruction}>
                    <div className={classes.aim}>Зачем это нужно? </div>
                    <div className={classes.textDescription}>
                        Укажите роль в компании и информацию чем вы <br />
                        занимаетесь. Эти данные помогут нам лучше
                        понимать профиль наших клиентов и сделать
                        продукт лучше.
                    </div>
                </div>
            </div>



            <img className={classes.vector} src={vector} alt="" />


            <div className={classes.info}>
                <div  >
                    <div className={classes.textItem}>Планируете использовать? </div>
                    <div className={classes.btnContainer}>
                        <button className={`${classes.btn}  ${act}`} onClick={
                            (e) => {
                                setState(<ForMe />)
                                setStyle(classes.miniContainer)
                            }
                        } > Для себя
                        </button>

                        <button className={`${classes.btnRight} ${act2}`} onClick={
                            () => {

                                setState(<Company />)
                                setStyle(classes.container)

                            }
                        }> Для компании
                        </button>
                    </div>


                </div>
                {state}
                <div>
                    <button className={classes.btnEnd}>Завершить регистрацию</button>
                </div>

            </div>

        </div>
    )
}