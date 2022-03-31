import { makeStyles } from "@material-ui/core";
import React from "react";
import orange from '../assets/orange.png'

export const greetingStyles = makeStyles({
    bg: {
        background: `url(${orange})`,
        minWidth: '1140px',
        minHeight: '900px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


    },

    content1: {
        width: '325px',
        height: '178px',
        margin: ' auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },

    

    textContent: {
    },
    btn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        width: '325px',
        height: '48px',
        background: '#5D5FEF',
        borderRadius: '8px',
        justifyContent: 'center',
        color: 'white',
        fontSize: 'white',
        fontWeight: 600,

    },
    link: {
        textDecoration: 'none',

    },
    title: {
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '36px',
        /* identical to box height */


        color: '#121212',
        textAlign: 'start'
    },
    text: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',
        /* or 171% */

        textAlign: 'start',
        color: '#3A3A3A'
    },
    '@media (max-width: 767px)': {
        content1: {
            margin: ' 0px auto',
        },
        title: {
            fontWeight: 600,
            fontSize: '14px',
        },
        text: {
            fontWeight: 600,
            fontSize: '10px',
        },
        btn: {
            maxWidth: '100%'
        },
        bg: {
            minWidth: '100%'
        }

    }
})