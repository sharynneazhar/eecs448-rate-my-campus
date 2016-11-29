import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/app.js';
import SearchResults from '../../ui/pages/searchResults';
import Help from '../../ui/pages/help';
import Contact from '../../ui/pages/help/contact.js';
import FAQ from '../../ui/pages/help/faq.js';
import HowTo from '../../ui/pages/help/how-to.js';
import Ratings from '../../ui/pages/help/ratings.js';
import ClassroomSearch from '../../ui/pages/classroomSearch';

import HomeContainer from '../../ui/containers/HomeContainer';
import BuildingContainer from '../../ui/containers/BuildingContainer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route name="home" path="/home" component={HomeContainer} />
      <Route name="building" path="/building/:buildingId" component={BuildingContainer} />
      <Route name="search" path="/search" component={SearchResults} />
      <Route name="help" path="/help" component={Help} />
      <Route name="contact" path="/help/contact" component={Contact} />
      <Route name="faq" path="/help/FAQ" component={FAQ} />
      <Route name="how-to" path="/help/how-to" component={HowTo} />
      <Route name="ratings" path="/help/ratings" component={Ratings} />
      <Route name="classroomSearch" path="/classroomSearch" component={ClassroomSearch} />
    </Route>
  </Router>
);
