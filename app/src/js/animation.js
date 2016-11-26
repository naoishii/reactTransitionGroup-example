import React, { PropTypes } from 'react';

export default class Animation extends React.Component {
  componentWillAppear(done) {
    console.log('appear');
    done();
  }

  componentWillEnter(done) {
    const body = document.querySelector('body');
    const h = document.createElement('div');
    h.id = 'hoge';
    h.innerHTML = 'asdfajsldkfjasd;lf';
    body.appendChild(h);
    console.log('enter');
    setTimeout(done, 1000);
  }
  componentDidEnter() {
    const body = document.querySelector('body');
    const hoge = document.querySelector('#hoge');
    body.removeChild(hoge);
    console.log('did enter');
  }
  render() {
    return null;
  }
}

Animation.propTypes = {
  children: PropTypes.object,
};
