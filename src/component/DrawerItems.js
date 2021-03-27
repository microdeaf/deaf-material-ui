import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip } from '@material-ui/core';
// import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  textItem: {
    textAlign: 'right'
  },
  subMenu: {
    paddingRight: 20,
    color: '#fffffa'
  }
}));

const ListItems = ({ menu, onClick, state, className, root }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const _onClick = () => {
    setOpen(!open);
    onClick(open);
  }

  return (
    <React.Fragment>
      {menu.to
        ? <ListItem button component={Link} to={menu.to}>
          <Tooltip title={menu.text} placement="left">
            <ListItemIcon>
              {root ? <Icon name={menu.icon} /> : <Icon name={menu.icon} fontSize="small" style={{ color: '#fffffa' }} />}
            </ListItemIcon>
          </Tooltip>
          {state ? <ListItemText className={clsx(classes.textItem, className)} primary={menu.text} />
            : <ListItemText primary='' />}
        </ListItem>
        : <ListItem button onClick={_onClick}>
          {state
            ? (<ListItemIcon>
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItemIcon>)
            : (<Tooltip title={menu.text} placement="left">
              <ListItemIcon>
                <Icon name={menu.icon} />
              </ListItemIcon>
            </Tooltip>)}
          <ListItemText className={clsx(classes.textItem, className)} primary={menu.text} />
        </ListItem>
      }
    </React.Fragment>
  )
};

ListItems.propTypes = {
  menu: PropTypes.object,
  onClick: PropTypes.func,
  state: PropTypes.bool,
  className: PropTypes.any,
  root: PropTypes.bool
}

const CollapseItems = ({ menus, state, className, hasRole }) => {
  return menus.map((item, index) => {
    // return (
    //   <List key={index} disablePadding>
    //     <ListItems menu={item} state={state} className={className} />
    //   </List>
    // )
    return hasRole(item.role) &&
      (
        <List key={index} disablePadding>
          <ListItems menu={item} state={state} className={className} />
        </List>
      )
  })
};

const MenuItems = ({ item, state, hasRole }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const _onClick = (value) => {
    setOpen(value);
  }
  return (
    <React.Fragment>
      <ListItems menu={item} onClick={(value) => _onClick(value)} state={state} root />
      {item.menu != null && <Collapse component="li" in={open} timeout="auto" unmountOnExit>
        <CollapseItems menus={item.menu} state={state} className={classes.subMenu} hasRole={role => hasRole(role)} />
      </Collapse>
      }
    </React.Fragment>
  )
};

MenuItems.propTypes = {
  item: PropTypes.object,
  state: PropTypes.bool,
  hasRole: PropTypes.func
}

export default function DrawerItems({ state, menus, hasRole }) {
  return menus.map((menu, index) => {
    // return (
    //   <List key={index}>
    //     <MenuItems item={menu} state={state} hasRole={role => hasRole(role)} />
    //   </List>
    // )
    return hasRole(menu.role) &&
      (
        <List key={index}>
          <MenuItems item={menu} state={state} hasRole={role => hasRole(role)} />
        </List>
      )
  })
}
