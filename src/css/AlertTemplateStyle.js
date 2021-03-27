import { makeStyles } from '@material-ui/core/styles';

export const AlertTemplateStyle = makeStyles(theme => ({
    alert: {
        backgroundColor: '#151515',
        color: 'white',
        padding: '10px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
        height: '5em',
        width: '30em',
        boxSizing: 'border-box',
        fontFamily: 'IRANSans',
    },
    button: {
        marginLeft: '20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: '#FFFFFF'
    },
    message: { 
        flex: 2, 
        direction: theme.direction === 'rtl' ? 'ltr' : 'rtl'
    }
}));