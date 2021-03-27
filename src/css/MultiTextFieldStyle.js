import { makeStyles } from '@material-ui/core/styles';

export const MultiTextFieldStyle = makeStyles(theme => ({
    dir: {
        direction: theme.direction === 'rtl' ? 'ltr' : 'rtl'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        background: '#fff',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '15px',
        padding: 0,
        boxShadow: '0px 0px 12px 3px rgba(150,147,150,0.61)',
        minWidth: '200px',
        flexGrow: 1,
    },
    divContainer: {
        direction: theme.direction === 'rtl' ? 'ltr' : 'rtl',
        padding: '10px',
        width: '100%',
        marginRight: '29px',
        marginLeft: '29px',
    },
    bottomBar: {
        alignItems: 'flex-start',
        margin: 0,
        background: 'rgb(219, 219, 240)',
        borderTop: '1px solid #e2dddd',
        marginTop: '30px',
        width: '100%'
    },
    button: {
        margin: '1em',
        fontWeight: 'bold',
    },
    input: {
        marginTop: '10px',
        width: '100%',
        display: 'flex',
    },
    icon: {
        marginTop: '19px',
        cursor: 'pointer',
    }
}))