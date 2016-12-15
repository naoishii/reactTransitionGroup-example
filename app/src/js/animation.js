import React from 'react';
import reactDom from 'react-dom';
import BallPool from './matter';

const body = document.querySelector('body');
const h = document.createElement('div');
h.id = 'hoge';
h.style.display = 'none';
h.style.position = 'fixed';
h.style.top = '0';
//h.style.margin = '0 50%';
body.appendChild(h);

const ballPool = new BallPool(h);

class Animation extends React.Component {
  componentWillAppear(done) {
    ballPool.initWorld();
    console.log('appear');
    done();
  }

  componentWillEnter(done) {
    ballPool.update();
    h.style.display = 'block';
    setTimeout(done, 1000);
    console.log('enter');
  }
  componentDidEnter() {
    h.style.display = 'none';
    console.log('did enter');
  }
  render() {
    return null;
  }
}

export default Animation;
