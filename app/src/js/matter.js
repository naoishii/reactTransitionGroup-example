import React from 'react';
import reactDom from 'react-dom';

import Matter from 'matter-js';

const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Render = Matter.Render;

const baseHeight = window.innerHeight;
const baseWidth = window.innerWidth;

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
        width: baseWidth, // canvasの横幅
        height: baseHeight, // canvasの高さ
        background: '0% 0% / contain rgba(255, 255, 255, 0)',
        opacity: 0.2,
      },
    });

    Render.run(renderer);

    const ground = Bodies.rectangle(baseWidth / 2, baseHeight, baseWidth, 20, { isStatic: true, name: 'ground' });
    const wallL = Bodies.rectangle(0, baseHeight / 2, 20, baseHeight, { isStatic: true, name: 'ground' });
    const wallR = Bodies.rectangle(baseWidth, baseHeight / 2, 20, baseHeight, { isStatic: true, name: 'ground' });

    World.add(engine.world, [wallL, wallR, ground]);

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
    const circles = [];
    for(let i = 0; i < 20; i++) {
      circles.push(
        Bodies.circle(
          Math.random() * 1000 % baseWidth,
          0 - Math.random() * 100 % 100,
          40, {
            density: 0.001, // 質量
            frictionAir: 0.01, // 空気抵抗
            restitution: 0, // 弾力性
            friction: 0.1, // 摩擦
            name: 'coin',
            render: {
              opacity: 1,
            },
          }
        )
      );
    }
    const ground = Bodies.rectangle(baseWidth / 2, baseHeight, baseWidth, 20, { isStatic: true, name: 'ground' });

    World.add(engine.world, circles);
    // run the engine
    Engine.run(engine);
    console.log(World);
  }

  render() {
    return <div />;
  }
}

export default Physical;
