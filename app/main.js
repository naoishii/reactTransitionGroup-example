import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import reactDom from 'react-dom';

import { Index, Page1, Page2 } from './src/js/pages';
import animate from './src/js/animate';

const AnimatedIndex = animate(Index);
const AnimatedPage1 = animate(Page1);
const AnimatedPage2 = animate(Page2);

const propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

const App = ({ children, location }) => (
  <div>
    <ul>
      <li><Link to="/page1">Page 1</Link></li>
      <li><Link to="/page2">Page 2</Link></li>
    </ul>

    <ReactTransitionGroup>
      {React.cloneElement(children, {
        key: location.pathname,
      })}
    </ReactTransitionGroup>

  </div>
);

App.propTypes = propTypes;

reactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AnimatedIndex} />
      <Route path="page1" component={AnimatedPage1} />
      <Route path="page2" component={AnimatedPage2} />
    </Route>
  </Router>
), document.querySelector('[data-react="app"]'));
