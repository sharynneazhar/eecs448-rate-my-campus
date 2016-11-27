import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/app.js';
import Home from '../../ui/pages/home';
import SearchResults from '../../ui/pages/searchResults';
import Building from '../../ui/pages/building';
import Help from '../../ui/pages/help';
import Contact from '../../ui/pages/help/contact.js';
import FAQ from '../../ui/pages/help/faq.js';
import HowTo from '../../ui/pages/help/how-to.js';
import Ratings from '../../ui/pages/help/ratings.js';
import ClassroomSearch from '../../ui/pages/classroomSearch';

import BuildingContainer from '../../ui/containers/BuildingContainer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route name="home" path="/home" component={Home} />
      <Route name="search" path="/search" component={SearchResults} />
      <Route name="building" path="/building/:buildingId" component={BuildingContainer} />
      <Route name="help" path="/help" component={Help} />
      <Route name="contact" path="/help/contact" component={Contact} />
      <Route name="faq" path="/help/FAQ" component={FAQ} />
      <Route name="how-to" path="/help/how-to" component={HowTo} />
      <Route name="ratings" path="/help/ratings" component={Ratings} />
      <Route name="classroomSearch" path="/classroomSearch" component={ClassroomSearch} />
      {/* <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/> */}
    </Route>
  </Router>
);
