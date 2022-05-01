import { makeStyles } from "@material-ui/core";
import React from "react";


export const useStyles = makeStyles( {
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginBox: {
        width: '325px',
        height: '440px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleContainer: {
        height: '64px',
        width: '100%',
       
        display: 'flex',
        flexDirection: 'column'
    },
    h1: {
        fontSize: '28px',
        height: '36px',
       
        marginTop: '0px',
        fontFamily: 'Mont',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '36px',


color: '#262626'

    },
    description: {
       
        marginTop: '4px',
        fontFamily: 'Mont',
fontStyle: 'normal',
fontWeight: 600,
fontSize: '14px',
lineHeight: '24px',


color: '#262626'
    },

    body: {
        height: '218px',
        width: '100%',
       
    },
    email: {
        display: 'flex',
        flexDirection: 'column'
    },
    password: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '24px'
    },
    emailTitle: {
        position: 'relative',
        width: '45px',
        fontFamily: 'Mont',
fontStyle: 'normal',
fontWeight: 600,
fontSize: '14px',
lineHeight: '24px',


color: '#262626'
    },
    input: {
        height: '50px',
        background: '#FFFFFF',
border: '1px solid rgba(228, 228, 228, 0.9)',
boxSizing: 'border-box',
borderRadius: '8px',
padding: '16px 20px'

    },
    footer: {
        height: '94px',
        width: '100%',
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
fontWeight: 600
},
offer: {
    fontWeight: 400,
    fontSize: '14px',
    textAlign: 'center',
    color: '#262626',
    marginTop: '24px'
},
link: {
    textDecoration: 'none',
    color: '#5D5FEF'
},
error: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight:'24px',
    color: '#FF2424'
},
'@media (max-width: 768px)':
    {
        loginContainer: {
            marginTop: '40px '
        }
    }
})