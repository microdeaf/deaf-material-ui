import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Header } from '../component/header';
import Drawer from '../component/Drawer';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

function Screen({ children, menus, role, hasRole, isLogin }) {
  console.log("isLogin",isLogin);
  if (!isLogin) {
    return <Redirect to="/login" />
  }

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const _handleDrawerOpen = () => { 
    setOpen(true);
  };

  const _handleDrawerClose = () => {
    setOpen(false);
  };

  if (hasRole(role)) {
    return (
      <div className={classes.root}>
        <Header open={open} handleDrawerOpen={_handleDrawerOpen} />
        {theme.direction === 'rtl' && React.cloneElement(children, { open: open })}
        <Drawer open={open} handleDrawerClose={_handleDrawerClose} menus={menus} hasRole={hasRole} />
        {theme.direction !== 'rtl' && React.cloneElement(children, { open: open })}
      </div>
    )
  } else {
    return <React.Fragment />
  }
}

Screen.propTypes = {
  children: PropTypes.any,
  menus: PropTypes.array,
  role: PropTypes.any,
  hasRole: PropTypes.func,
  isLogin: PropTypes.bool
}

export default Screen;
