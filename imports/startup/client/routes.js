import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/app.js';
import Home from '../../ui/pages/home';
import SearchResults from '../../ui/pages/searchResults';
import Building from '../../ui/pages/building';

import BuildingContainer from '../../ui/containers/BuildingContainer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route name="home" path="/home" component={Home} />
      <Route name="search" path="/search" component={SearchResults} />
      <Route name="building" path="/building/:buildingId" component={BuildingContainer} />
      {/* <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/> */}
    </Route>
  </Router>
);
