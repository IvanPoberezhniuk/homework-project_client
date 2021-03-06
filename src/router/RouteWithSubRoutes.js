import { Suspense } from 'react';

import DashboardContainer from 'containers/pages/DashboardContainer';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const RouteWithSubRoutes = ({ ...route }) => {
  const authenticated = useSelector((state) => state.auth.isAuth);

  return (
    <Suspense fallback={route.fallback}>
      {route.redirect ? (
        <Route path={route.path} {...route}>
          <Redirect to={route.redirect} />
        </Route>
      ) : route.private ? (
        authenticated ? (
          route.component &&
          !route?.partition && (
            <Route path={route.path} {...route}>
              <DashboardContainer route={route} />
            </Route>
          )
        ) : (
          <Route key={route.key}>
            <Redirect to={'/signin'} />
          </Route>
        )
      ) : (
        route.component && <Route {...route} />
      )}
    </Suspense>
  );
};

export default RouteWithSubRoutes;
