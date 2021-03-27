import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import DrawerItems from './DrawerItems';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #004d40 30%, #004d40 90%)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    })
  },
  drawerClose: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #004d40 30%, #009688 90%)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  drawerHeader: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #004d40 30%, #009688 90%)',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: theme.direction === 'rtl' ? 'flex-start' : 'flex-end'
  },
  itemsContainer: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    background: 'linear-gradient(45deg, #004d40 30%, #009688 90%)',
  }
}))

function CommonDrawer ({ open, handleDrawerClose, menus, hasRole }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <section className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </section>
      <Divider />
      <section className={classes.itemsContainer}>
        <DrawerItems state={open} menus={menus} hasRole={role => hasRole(role)} />
      </section>
    </Drawer>
  )
}

CommonDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  menus: PropTypes.array,
  hasRole: PropTypes.func
}

export default CommonDrawer;
