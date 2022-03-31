import { makeStyles } from "@material-ui/core";
import React from "react";


export const userInfoStyles = makeStyles({
    container: {
        maxWidth: '752px',
        maxHeight: '560px',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#F8F8F8',
        fontFamily: 'Arial' 
    },
    miniContainer: {
        height: '388px',
        width: '752px',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#F8F8F8'
    },
    description: {
        width: '380px',
        height: '205px',
    },
    info: {

        width: '324px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '100%'
    },
    infoContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '560px'
    },
    '@media (max-width: 768px)' : {
        container: {
            background: 'green'
        }
    },
    vector: {
        maxHeight: '560px',
        border: '1px solid #C4C4C4'
    },
    miniBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '60%',
        alignSelf: 'stretch',
        alignItems: 'stretch'

    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        width: '162px',
        height: '38px',
        borderRadius: '8px 0px 0px 8px'
    },
    btnContainer: {
        display: 'flex',
        marginTop: '8px'
    },
    btnRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        width: '162px',
        border: '1px solid #FFFFFF',
        background: '#FFFFFF',
        borderRadius: '0px 8px 8px 0px'
    },
    textItem: {
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',
        color: '#262626',
        textAlign: 'start'
    },
    select: {
        height: '38px',
        maxWidth: '100%',
        marginTop: '8px',

    },
    inputBox: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    btnEnd: {
        width: '100%',
        height: '44px',
        background: '#5D5FEF',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '100%',
        color: '#FFFFFF'
    },
    request: {
        fontStyle: 'normal',
fontWeight: 600,
fontSize: '18px',
lineHeight: '23px',

/* #262626 */

color: '#262626',
maxWidth: '326px',
maxHeight: '69px',
textAlign: 'start',
margin: '0 10px'
    },
    instruction: {
        marginTop: '32px'
    },
   aim: {
       fontWeight: 600,
       fontSize: '24px',
       textAlign: 'start', 
       color: '#26262',
       marginLeft: '10px'
   },
   textDescription: {
       maxWidth: '380px',
       maxHeight: '72px',
       fontWeight: 600,
       fontSize: '12px',
       textAlign: 'start',
       marginLeft: '10px',
       marginTop: '8px'
   },
   active: {
       background: 'green'
   }
})

export default userInfoStyles