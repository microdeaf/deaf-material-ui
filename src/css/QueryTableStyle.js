import { makeStyles } from '@material-ui/core/styles';

export const QueryTableStyle = makeStyles(theme => ({
  root: {
    direction: theme.direction === 'rtl' ? 'ltr' : 'rtl',
    display: 'grid',

    width: '100%',
    marginTop: '1em',
    marginBottom: '0.5em',
    // marginRight: '0.2em',
    // marginLeft: '0.2em',

    borderWidth: '0.1em',
    borderStyle: 'solid',
    borderColor: 'rgb(214, 206, 206)',
    borderRadius: '3em'
  },
  container: {
    alignItems: 'center',
    maxHeight: '440'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  handCursor: {
    cursor: 'pointer'
  }
}))
