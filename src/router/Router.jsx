import React from 'react';

import { Switch, useLocation } from 'react-router-dom';

import { modalRoutes, routes } from './config';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Router = ({ ...other }) => {
  const location = useLocation();

  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        {routes &&
          routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
      </Switch>
      {background &&
        modalRoutes.map((route) => {
          return <RouteWithSubRoutes key={route.path} {...route} />;
        })}
    </>
  );
};

export default Router;
