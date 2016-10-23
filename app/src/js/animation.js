import React, { PropTypes } from 'react';
import reactDom from 'react-dom';


export default class Animation extends React.Component {
  componentWillAppear(done) {
    console.log('appear');
    done();
  }

  componentWillEnter(done) {
    const el = reactDom.findDOMNode(this);
    console.log('enter', el);
    setTimeout(done, 1000);
    //done();
  }
  componentDidEnter(done) {
    console.log('did enter');
  }
}

Animation.propTypes = {
  children: PropTypes.object,
};

export class Index extends Animation {
  render() {
    return (
      <div className="Image">
        <h1>Index</h1>
        <p>Animations with React Router are not different than any other animation.</p>
      </div>
    );
  }
}
export class Page1 extends Animation {
  render() {
    return (
      <div className="Image">
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}
export class Page2 extends Animation {
  render() {
    return (
      <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

