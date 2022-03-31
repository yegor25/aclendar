import { makeStyles } from "@material-ui/core";
import union from '../assets/Union.svg'
import ipluse from '../assets/Ipluse.svg'
import React from "react";


const useStyles = makeStyles({
    navbarContainer: {
        width: '300px',
        minHeight: '100%',
        background: '#262626',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    union: {
        width: '88.6px',
        height: '67.04px'
    },
    ipluse: {
        fontSize: '36px',
        color: '#FFFFFF',
        fontFamily: 'Mont'

    },
    '@media (max-width: 767px)': {
        navbarContainer: {
            width: '100%',
            minHeight: '64px',
            background: '#262626',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        union: {
            with: '28.35px',
            height: '21.54px',
        },
        ipluse: {
            fontSize: '8.96px',
            marginTop: '4px'
        }
    }
})
export const Navbar = () => {


    const classes = useStyles()
    return (
        <div className={classes.navbarContainer}>
            <img className={classes.union} src={union} alt="" />
            <span className={classes.ipluse}>Ipluse</span>
        </div>
    )
}