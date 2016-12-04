import React from 'react';
import reactDom from 'react-dom';

import Matter from 'matter-js';

const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Render = Matter.Render;

class Physical extends React.Component {
  componentDidMount() {
    // create a Matter.js engine
    const engine = Engine.create();
    Engine.run(engine);
    const renderer = Render.create({
      element: reactDom.findDOMNode(this),
      engine,
      options: {
        wireframes: false,
        width: 500, // canvasの横幅
        height: 500, // canvasの高さ
        background: '0% 0% / contain rgba(255, 255, 255, 0)',
        opacity: 0.2,
      },
    });

    Render.run(renderer);

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
      render: {
        opacity: 1,
      },
    });
    const ground = Bodies.rectangle(200, 200, 400, 20, { isStatic: true, name: 'hell' });

    World.add(engine.world, [circleA, ground]);
    // run the engine
    Engine.run(engine);
  }

  render() {
    return <div />;
  }
}

export default Physical;
