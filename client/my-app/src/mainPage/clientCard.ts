import { makeStyles } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";
import { height } from "@mui/system";


export const clientCard = makeStyles({
    clientContent: {
        width: '453px',
        maxHeight: '730px',
        background: '#F8F8F8',
        borderRadius: '32px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top:'15%',
        left:'35%',
        zIndex: 5
    },
    title: {
        color: '#262626',
        fontSize: '18px',
        fontWeight: 600
    },

    information: {
        width: '325px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginTop: '24px',
        alignItems: 'center',
        paddingBottom: '24px',

    },
    userData: {
        maxHeight: '634px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '325px',
        gap: '12px'
    },
    addPhoto: {
        border: 'none',
        background: 0,
        cursor: 'pointer'
    },

    infoItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '82px',
        width: '325px'
    },
    input: {
        height: '50px',
        width: '325px',
        border: '1px solid rgba(228, 228, 228, 0.9)',
        borderRadius: '8px'
    },
    mainTitle: {
        fontSize: '14px'
    },
    birth: {
        maxHeight: '100%',
        background: '#FFFFFF',
        width: '185px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        gap: '10px',
        border: '1px solid rgba(228, 228, 228, 0.9)',
        
    },
    radio: {
        display: 'flex',
        alignItems: 'center',
        width: '125px',
        justifyContent: 'center',
        fontSize: '8px'
    },
    inputRadio: {

        color: pink[800],
        '&.Mui-checked': {
            color: pink[600],
        },
    },
   
    btnEnds: {
        marginTop: '24px',
        maxWidth: '656px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '16px'
    },
    btnExit: {
        width: '156.5px',
        height: '48px',
        border: '1px solid red',
        borderRadius: '8px',
        background: '#FFFFFF',
        color: 'red'
    },
    btnCreate: {
        color: '#FFFFFF',
        background: '#5D5FEF',
        borderRadius: '8px',
        width: '156.5px'
    },
    personal: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '74px',
        marginTop: '24px',
        marginLeft: '-12px'
    },
    calendar: {
       
    },
    date: {
        height: '16px'
    },
    switch: {
        width: '100%',
        fontSize: '14px',
        display:'flex',
        alignItems: 'center'
    }
})