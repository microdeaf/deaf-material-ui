import React from 'react';
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Divider, Popper, Fade, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const useStyles = makeStyles((theme) => ({
  container: {
    // background: 'linear-gradient(55deg, #FF8E53 30%, #FE6B8B 90%)',
    background: 'linear-gradient(45deg, #004d40 30%, #004d40 90%)',
    [theme.breakpoints.up('md')]: {
      marginTop: '0.75rem'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '0.45rem'
    },
    marginLeft: '-0.3rem'
  },
  paper: {
    // background: 'linear-gradient(55deg, #FF8E53 30%, #FE6B8B 90%)',
    background: 'linear-gradient(45deg, #004d40 30%, #004d40 90%)',
    padding: theme.spacing(2)
  },
  typography: {
    padding: theme.spacing(2, 2, 0, 2),
    textAlign: 'center',
    cursor: 'pointer'
  },
  avatar: {
    cursor: 'pointer'
  },
  user: {
    margin: 'auto'
  }
}));

const arrow = <Icon name="ArrowDropUp"/>;

function HeaderAvatar ({ userStore }) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const arrowRef = React.useRef(arrow);

  const _onClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const _onMouseLeave = (event) => {
    setOpen(false);
  };

  const _logout = () => {
    userStore.remove();
    history.push('/login')
  };

  // const open = Boolean(anchorEl);
  const id = open ? 'avatar' : undefined;

  return (
    <div>
      <div onClick={(e) => _onClick(e)}>
        <Avatar className={classes.avatar} src="../../icon/user.jpeg" />
      </div>
      {/* <Popover
        id={id}
        className={classes.root}
        open={open}
        anchorEl={anchorEl}
        onClose={() => _onClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      > */}
      <Popper
        className={classes.container}
        id={id}
        open={open}
        
        anchorEl={anchorEl}
        placement="bottom"
        transition
        onPointerLeave={_onMouseLeave}
        disablePortal={true}
        modifiers={{
          flip: {
            enabled: true
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'window'
          },
          arrow: {
            enabled: false,
            element: arrowRef
          }
        }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <Avatar className={classes.user} src="../../icon/user.jpeg" />
              <Typography className={classes.typography}>{userStore.get.username}</Typography>
              <Divider />
              <Typography className={classes.typography} onClick={() => _logout()}>
                <Icon name="ExitToAppRounded" />
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      {/* </Popover> */}
    </div>
  );
}

HeaderAvatar.propTypes = {
  userStore: PropTypes.any
}

export default inject('userStore')(observer(HeaderAvatar));
