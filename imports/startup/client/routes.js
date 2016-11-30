import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/app.js';
import SearchResults from '../../ui/pages/searchResults';
import Help from '../../ui/pages/help';
import Contact from '../../ui/pages/help/contact.js';
import Faq from '../../ui/pages/help/faq.js';
import HowTo from '../../ui/pages/help/how-to.js';
import Ratings from '../../ui/pages/help/ratings.js';

import HomeContainer from '../../ui/containers/HomeContainer';
import BuildingContainer from '../../ui/containers/BuildingContainer';
import RoomContainer from '../../ui/containers/RoomContainer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute type="building" component={HomeContainer} />
      <Route name="buildingSearch" path="/search/building" type="building" component={HomeContainer} />
      <Route name="roomSearch" path="/search/room" type="room" component={HomeContainer} />
      <Route name="searchResults" path="/search/results" component={SearchResults} />
      <Route name="building" path="/building/:buildingId" component={BuildingContainer} />
      <Route name="room" path="/room/:facilityId/:roomId" component={RoomContainer} />
      <Route name="help" path="/help" component={Help} />
      <Route name="howTo" path="/help/how-to" component={HowTo} />
      <Route name="contact" path="/help/contact" component={Contact} />
      <Route name="faq" path="/help/faq" component={Faq} />
      <Route name="ratings" path="/help/ratings" component={Ratings} />
    </Route>
  </Router>
);
