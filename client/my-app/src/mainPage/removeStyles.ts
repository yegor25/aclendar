import { makeStyles } from "@material-ui/core";



export const removeStyles = makeStyles( {
    removeContent : {
        width: '453px',
        height: '218px',
        background:'#F8F8F8',
        position: 'fixed',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width:'325px',
        
    },
    textContent: {
        height: '98px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    title: {
        width: '231px',
        textAlign:'start',
        fontSize: '18px',
        color: 'black'
    },
    text: {
        fontSize:'14px',
        width: '292px'
    },
    btn: {
        marginTop: '24px',
        display: 'flex',
        gap: '4px',
        height: '48px'
    },
    item: {
        width: '156.5px',
        borderRadius: '8px'
    },
    remove: {
        background: 0,
        border: '1px solid red',
        color: 'red'
    },
    cancel: {
        background: '#5D5FEF',
        color: '#FFFFFF'
    }
})