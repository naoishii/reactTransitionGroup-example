import React from 'react';
import reactDom from 'react-dom';
import Loading from './matter';

const body = document.querySelector('body');
const h = document.createElement('div');
h.id = 'hoge';
h.style.display = 'none';
h.style.position = 'fixed';
h.style.top = '0';
h.style.margin = '0 50%';
body.appendChild(h);

class Animation extends React.Component {
  componentWillAppear(done) {
    console.log('appear');
    done();
  }

  componentWillEnter(done) {
    reactDom.render(<Loading />, h);
    h.style.display = 'block';
    setTimeout(done, 1000);
    console.log('enter');
  }
  componentDidEnter() {
    // const body = document.querySelector('body');
    // const hoge = document.querySelector('#hoge');
    // body.removeChild(hoge);

    h.style.display = 'none';
    console.log('did enter');
  }
  render() {
    return null;
  }
}

export default Animation;
