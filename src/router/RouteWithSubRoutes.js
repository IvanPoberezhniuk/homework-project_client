import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Sidebar } from '../components';
import Dashboard from '../containers/pages/Dashboard';
import DashboardContainer from '../containers/pages/DashboardContainer';

const RouteWithSubRoutes = (route) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            isAuth ? (
              route.component && (
                <>
                  {!route?.partition && <DashboardContainer route={route} {...props} /> }
                </>
              )
            ) : (
              <Redirect to="/signin" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
