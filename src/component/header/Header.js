import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import HeaderAvatar from './HeaderAvatar';
import HeaderHome from './HeaderHome';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #009688 30%, #004d40 90%)',

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([theme.direction === 'rtl' ? 'margin' : 'width',
    theme.direction === 'rtl' ? 'width' : 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginRight: theme.direction === 'rtl' ? drawerWidth : 0,
    marginLeft: theme.direction === 'rtl' ? 0 : drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create([theme.direction === 'rtl' ? 'margin' : 'width',
    theme.direction === 'rtl' ? 'width' : 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    direction: theme.direction,
    display: 'flex',
    // margin: '5px 5px '  //after cadding home icon mr.mousavi commented this line because header become bigger.
  },
  title: {
    marginInlineEnd: 'auto'
  },
  menuButton: {
    marginLeft: theme.direction === 'rtl' ? 36 : 0,
    marginRight: theme.direction === 'rtl' ? 0 : 36
  },
  hide: {
    display: 'none'
  }
}));

function Header({ open, handleDrawerOpen, pageStore }) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="end"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          {pageStore.pageTitle}
        </Typography>
        <HeaderHome />
        <HeaderAvatar />
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  pageStore: PropTypes.any
}

export default inject('pageStore')(observer(Header));
