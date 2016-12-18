import React from 'react';
import BallPool from './ballPool';

const body = document.querySelector('body');
const h = document.createElement('div');
h.id = 'hoge';
h.style.display = 'none';
h.style.position = 'fixed';
h.style.top = '0';
body.appendChild(h);

const ballPool = new BallPool(h);

export default function animate(Component) {
  return class Animated extends React.Component {
    componentWillAppear(done) {
      ballPool.initWorld();
      console.log('appear');
      done();
    }

    componentWillEnter(done) {
      ballPool.update();
      h.style.display = 'block';
      setTimeout(done, 1000);
      console.log('will enter');
    }

    componentDidEnter() {
      h.style.display = 'none';
      console.log('did enter');
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}
