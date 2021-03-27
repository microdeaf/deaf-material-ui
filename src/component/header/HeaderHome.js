import React from 'react';
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Divider, Popper, Fade, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  // container: {
  //   background: 'linear-gradient(55deg, #FF8E53 30%, #FE6B8B 90%)',
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '0.75rem'
  //   },
  //   [theme.breakpoints.down('md')]: {
  //     marginTop: '0.45rem'
  //   },
  //   marginLeft: '-0.3rem'
  // },
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },

  homeIcon: {
    width: '10px',
    height: '10px',
  },
}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function HeaderHome({ userStore }) {
  const classes = useStyles();
  const history = useHistory();


  const _onClick = (event) => {
    history.push('/')
  };

  return (
    // <div >
      <div className={classes.root}>
        <HomeIcon style={{ fontSize: 30 }}   onClick={(e) => _onClick(e)} />
        {/* <img src={require("../../icon/home.png")} onClick={(e) => _onClick(e)} /> */}
        {/* <Avatar className={classes.avatar} src="../../icon/home.png" onClick={(e) => _onClick(e)} /> */}
      </div>
    // </div>
  );
}

HeaderHome.propTypes = {
  userStore: PropTypes.any
}

export default inject('userStore')(observer(HeaderHome));
