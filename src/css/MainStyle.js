import { makeStyles } from '@material-ui/core/styles';

export const MainStyle = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      padding: theme.spacing(8, 14, 8, 5)
    },
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
      padding: theme.spacing(6, 10, 6, 3)
    }
  }
}))
