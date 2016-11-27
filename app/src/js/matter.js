import React from 'react';
import reactDom from 'react-dom';

import Matter from 'matter-js';

const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

class Physical extends React.Component {
  componentDidMount() {
    // create a Matter.js engine
    const engine = Engine.create(reactDom.findDOMNode(this), {
      render: {
        options: {
          wireframes: false,
          width: 500, // canvasの横幅
          height: 500, // canvasの高さ
        },
      },
    });

    this.setState({
      engine,
    });
  }

  componentDidUpdate() {
    console.log('matter');
    const {
      engine,
    } = this.state;
    console.log(engine);
    const circleA = Bodies.circle(300, 0, 20, {
      density: 0.001, // 質量
      frictionAir: 0.01, // 空気抵抗
      restitution: 0.2, // 弾力性
      friction: 0.001, // 摩擦
      name: 'coin',
    });

    World.add(engine.world, [circleA]);
    // run the engine
    Engine.run(engine);
  }

  render() {
    return <div />;
  }
}

export default Physical;
