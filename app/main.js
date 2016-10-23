import add from './src/js/calc.js';
import Animation, { Index, Page1, Page2 } from './src/js/animation';
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';
import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import reactDom from 'react-dom';

const foo = [1];
const bar = [10];
console.log(add(...[...foo, ...bar]));

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

reactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.querySelector('[data-react="app"]'));
