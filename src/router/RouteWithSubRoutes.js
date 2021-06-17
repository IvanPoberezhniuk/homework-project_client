import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteWithSubRoutes = (route) => {
  // LOGGED IN MOCK
  //const isAuth = true;
  // LOGGED IN MOCK
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
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to='/signin' />
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
