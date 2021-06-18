import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouteWithSubRoutes = ({ ...route }) => {
  // LOGGED IN MOCK
  const authenticated = true;
  // LOGGED IN MOCK
  return (
    <Suspense fallback={route.fallback}>
      {route.redirect ? (
        <Route path={route.path} {...route}>
          <Redirect to={route.redirect} />
        </Route>
      ) : route.private ? (
        authenticated ? (
          route.component && <Route {...route} />
        ) : (
          <Route path={route.path}>
            <Redirect to={route.redirect} />
          </Route>
        )
      ) : (
        route.component && <Route {...route} />
      )}
    </Suspense>
  );
};

export default RouteWithSubRoutes;
