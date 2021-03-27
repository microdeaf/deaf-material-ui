import { makeStyles } from '@material-ui/core/styles';

export const ButtonStyle = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      height: theme => theme.height ? theme.height : '4em',
      width: theme => theme.width ? theme.width : '8em'
    }
  },
}))
