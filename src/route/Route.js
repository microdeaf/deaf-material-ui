import React from 'react';
import { Route } from 'react-router-dom';
import Screen from '../screen/Screen';
import Main from '../component/Main';
import PropTypes from 'prop-types';
// import { ReloginScreen } from '@dashboard/login';

function AppRoute ({ children, exact, path, flat, menus, role, isLogin, hasRole }) {
  return (
    <React.Fragment>
      {flat
        ? (
          <Route exact={exact} path={path}>
            <Main flat>
              {children}
            </Main>
          </Route>
        )
        : (
          <Screen menus={menus} role={role} hasRole={hasRole} isLogin={isLogin} >
            <Route exact={exact} path={path}>
              <Main>
                {children}
              </Main>
            </Route>
          </Screen>
        )
      }
    </React.Fragment>
  )
}

AppRoute.propTypes = {
  children: PropTypes.any,
  exact: PropTypes.bool,
  path: PropTypes.string,
  flat: PropTypes.bool,
  menus: PropTypes.array,
  userStore: PropTypes.any,
  role: PropTypes.string,
  isLogin: PropTypes.bool,
  hasRole: PropTypes.func
}

export default AppRoute;
