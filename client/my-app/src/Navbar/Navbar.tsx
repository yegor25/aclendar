import { makeStyles } from "@material-ui/core";
import union from '../assets/Union.svg'
import ipluse from '../assets/Ipluse.svg'
import React from "react";
import { borderRadius } from "@mui/system";
import cl from '../assets/cl.svg'
import an from '../assets/an.svg'
import not from '../assets/not.svg'
import cal from '../assets/cal.svg'
import out from '../assets/out.svg'
import Avatars from '../assets/Avatars.svg'
import { NavLink } from "react-router-dom";


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
    logos: {
        position: 'absolute',
        top: '40px',
    },
    union: {
        width: '43.27x',
        height: '32.74px'
    },
    ipluse: {
        fontSize: '13.67px',
        color: '#FFFFFF',
        fontFamily: 'Mont'

    },
    menu: {
        maxHeight: '568px',
        marginTop: '64px'
    },
    profile: {
        width: '160px',
        height: '132px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px auto'

    },
    avatar: {
        width: '64px',
        height: '64px',
        borderRadius: '93px',
        margin: ' auto'

    },
    name: {
        color: '#FFFFFF',
        fontWeight: 600,
        textAlign: 'center',
        fontSize: '14px',
        margin: '4 0px',
        lineHeight: '24px'
    },
    role: {
        color: '#FFFFFF',
        fontWeight: 600,
        textAlign: 'center',
        fontSize: '14px',
        margin: '4 0px',
        lineHeight: '24px'


    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 12px',
        border: 'none',
        background: 'none',
        textDecoration: 'none'
    },
    internalMenu: {
        width: '236px',
        height: '348px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '32px'
    },
    item: {
        margin: '0 10px',
        fontFamily: 'Mont',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FFFFFF'
    },
    active: {
        background: '#5D5FEF',
        textDecoration: 'none',
        fontFamily: 'Mont',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        margin: '0 12px',
        borderRadius: '8px'

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
type navBarPropsType = {
    loggedIn: boolean
}
export const Navbar = (props: navBarPropsType) => {


    const classes = useStyles()
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.logos}>
                <img className={classes.union} src={union} alt="" />
                <span className={classes.ipluse}>Ipluse</span>
            </div>
            {
                props.loggedIn &&
                <div className={classes.menu}>
                    <div className={classes.profile}>
                        <img className={classes.avatar} src={Avatars} alt="" />
                        <div className={classes.name}>Иванов Алексей</div>
                        <div className={classes.role}>Мастер по маникюру</div>
                    </div>
                    <div className={classes.internalMenu}>
                        <NavLink className={({ isActive }) => isActive ? classes.active : classes.btn} to={'/main'}>
                            <img className={classes.item} src={cl} />
                            <span className={classes.item}>Клиенты</span>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? classes.active : classes.btn} to={'/analytics'}>
                            <img className={classes.item} src={an} />
                            <span className={classes.item}>Аналитика</span>
                        </NavLink>



                        <NavLink className={({ isActive }) => isActive ? classes.active : classes.btn} to={'/notations'}>
                            <img className={classes.item} src={not} />
                            <span className={classes.item}>Напоминания</span>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? classes.active : classes.btn} to={'/dashboard'}>
                            <img className={classes.item} src={cal} />
                            <span className={classes.item}>Расписание</span>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? classes.active : classes.btn} to={'/login'}>
                            <img className={classes.item} src={out} />
                            <span className={classes.item}>Выйти</span>
                        </NavLink>

                    </div>
                </div>
            }


        </div>
    )
}