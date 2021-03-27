import React from 'react';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { MainStyle } from '../css';
import PropTypes from 'prop-types';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Main ({ open, children, flat }) {
  const classes = MainStyle();

  return (
    <React.Fragment>
      {
        !flat
          ? (
            <StylesProvider jss={jss}>
              <main className={classes.content}>
                <div className={classes.drawerHeader} />
                {children}
              </main>
            </StylesProvider>
          )
          : (
            <StylesProvider jss={jss}>
              {children}
            </StylesProvider>
          )
      }
    </React.Fragment>
  );
}

Main.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
  flat: PropTypes.bool
}

export default Main;
