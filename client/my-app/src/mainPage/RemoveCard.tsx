import React from "react";
import { useDispatch } from "react-redux";
import { clientsStateType, removeClientTC } from "../store/ClientsReducer";
import { removeStyles } from "./removeStyles";

type removePropsType = {
    remove: boolean,
    setRemove: (remove: boolean) => void,
    clientId: string    
}

export const RemoveCard = (props: removePropsType) => {
    const classes = removeStyles()
    const dispatch = useDispatch()

    const cancel = () => {
        props.setRemove(false)
    }
    const removeClient = (id: string) => {
        debugger
        dispatch(removeClientTC(id))
        props.setRemove(false)
    }
    return (
        <div className={classes.removeContent}>
            <div className={classes.content}>
                <div className={classes.textContent}>
                    <div className={classes.title}>
                        Вы уверены, что хотите удалить клиента?
                    </div>
                    <div className= {classes.text}>
                        У вас не будет возможности восстановить эти даннные
                    </div>

                </div>
                <div className= {classes.btn}>
                    <button onClick={() => removeClient(props.clientId)} className= {`${classes.item} ${classes.remove}`}>Удалить</button>
                    <button onClick={cancel} className= {`${classes.item} ${classes.cancel}`}>Отменить</button>
                </div>
            </div>

        </div>
    )
}