import { useRef } from "react"
import { useStyles } from "./MainPage"

type propsType = {
    sort: boolean,
    setSort: (sort: boolean) => void
}
export const Sort = (props: propsType) => {
    const sortRef = useRef(null)


    window.addEventListener('mousedown', (event) => {
        //@ts-ignore
        if (!sortRef?.current?.contains(event.target)) {
            props.setSort(false)
        };
    })
    const classes = useStyles()
    return (
        <div ref={sortRef}  className={classes.sortActive}>

        </div>
    )
}