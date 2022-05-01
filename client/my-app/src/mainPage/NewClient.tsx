import React, { useState } from "react";
import { clientCard } from "./clientCard";
import addPhoto from '../assets/addPhoto.svg'
import calenadr from '../assets/calendar.svg'
import Radio from "@mui/material/Radio";
import { deepPurple } from "@material-ui/core/colors";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { indigo } from "@mui/material/colors";
import { IOSSwitch } from "./IOSswitch";
import { Controller, useForm } from "react-hook-form";
import { addClientAC } from "../store/ClientsReducer";
import { useDispatch } from "react-redux";
type propsType = {
    modal: boolean,
    setModal: (modal: boolean) => void
}
export const NewClient = (props: propsType) => {

    const classes = clientCard()
    const { register, handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        dispatch(addClientAC(data.name, data.surname, data.patronymic, data.phone, data.RadioGroup, data.birthday, data.switch))
        props.setModal(false)
    } 

    const dispatch = useDispatch()
    const [calendar, setCalendar] = useState(false)

    const exit = () => {
        props.setModal(false)
    }
    return (
        <div className={classes.clientContent}>
            <div className={classes.information}>
                <div className={classes.title}>Создать нового клиента</div>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.userData}>
                    <button className={classes.addPhoto}>
                        <img src={addPhoto} alt="" />
                    </button>
                    <div className={classes.infoItem}>
                        <div className={classes.mainTitle}>Фамилия</div>
                        <input {...register('surname')} className={classes.input} type="text" placeholder="Фамилия" />
                    </div>
                    <div className={classes.infoItem}>
                        <div className={classes.mainTitle}>Имя</div>
                        <input {...register('name')} className={classes.input} type="text" placeholder="Имя" />
                    </div>
                    <div className={classes.infoItem}>
                        <div className={classes.mainTitle}>Отчество</div>
                        <input {...register('patronymic')} className={classes.input} type="text" placeholder="Отчество" />
                    </div>

                    <div className={classes.infoItem}>
                        <div className={classes.mainTitle}>Телефон</div>
                        <input {...register('phone')} className={classes.input} type="tel" placeholder="Телефон" />
                    </div>
                    <div className={`${classes.personal} `}>
                        <Controller
                            render={({ field }) => (
                                <RadioGroup className={classes.radio} aria-label="gender" {...field}>
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio
                                            sx={{
                                                padding: '14px',
                                                color: indigo[500],
                                                '&.Mui-checked': {
                                                    color: deepPurple[600],
                                                },
                                            }} />}
                                        label="Ж"
                                    />

                                    <FormControlLabel
                                        value="male"
                                        control={<Radio
                                            sx={{
                                                color: indigo[500],
                                                '&.Mui-checked': {
                                                    color: deepPurple[600],
                                                },
                                            }} />}
                                        label="М"
                                    />

                                </RadioGroup>
                            )}
                            name="RadioGroup"
                            control={control}
                        />


                        {
                            !calendar
                                ? <div className={classes.birth} onClick={() => { setCalendar(true) }}>
                                    <img className={classes.calendar} src={calenadr} alt="" />
                                    <span className={classes.date}>Дата рождения</span>

                                </div>
                                : <input {...register('birthday')} autoFocus onBlur={() => { setCalendar(false) }} type="date" />
                        }

                    </div>
                    <div className={classes.switch}>
                        <Controller
                            name="switch"
                            control={control}
                            render={({ field }) => <IOSSwitch {...field} />}
                        />
                        <span>Согласие на SMS-уведомления</span>
                    </div>


                    <div className={classes.btnEnds}>
                        <button onClick={exit} className={classes.btnExit}>Отменить</button>
                        <button type="submit" className={classes.btnCreate}> Создать</button>
                    </div>
                </form>

            </div>


        </div>
    )
}