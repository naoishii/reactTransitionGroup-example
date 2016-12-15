import React from 'react';
import reactDom from 'react-dom';

import Matter from 'matter-js';

const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Render = Matter.Render;

const baseHeight = window.innerHeight;
const baseWidth = window.innerWidth;

export default class BallPool {
  constructor(element) {
    this.engine = Engine.create();
    this.renderer = Render.create({
      element: element, // todo
      engine: this.engine,
      options: {
        wireframes: false,
        width: baseWidth, // canvasの横幅
        height: baseHeight, // canvasの高さ
        background: '0% 0% / contain rgba(255, 255, 255, 0)',
        opacity: 0.2,
      },
    });

    const staticRenderOptions = {
      opacity: 0,
    };
    this.ground = Bodies.rectangle(
      baseWidth / 2,
      baseHeight,
      baseWidth,
      20,
      { isStatic: true, name: 'ground', render: staticRenderOptions }
    );
    this.wallL = Bodies.rectangle(
      0,
      baseHeight / 2,
      20,
      baseHeight,
      { isStatic: true, name: 'wallL', render: staticRenderOptions }
    );
    this.wallR = Bodies.rectangle(
      baseWidth,
      baseHeight / 2,
      20,
      baseHeight,
      { isStatic: true, name: 'wallR', render: staticRenderOptions }
    );
    
    this.ballCount = 0;

    Engine.run(this.engine);
    Render.run(this.renderer);
  }

  initWorld() {
    const {
      engine,
      wallL,
      wallR,
      ground,
    } = this;

    World.add(engine.world, [wallL, wallR, ground]);
    console.log('init');
  }

  resetWorld() {
    const {
      engine,
      ground,
    } = this;

    World.remove(engine.world, ground);
    setTimeout(() => {
      World.remove(engine.world, engine.world.bodies);
      this.ballCount = 0;
      this.initWorld(); 
    }, 1000)
  }

  update() {
    const {
      engine,
    } = this;
    const circles = [];

    if (this.ballCount > 100) {
      this.resetWorld();
      return;
    }

    for(let i = 0; i < 20; i++) {
      circles.push(
        Bodies.circle(Math.random() * 1000 % baseWidth, 0 - Math.random() * 100 % 100, 40, {
          density: 0.001, // 質量
          frictionAir: 0.001, // 空気抵抗
          restitution: 0, // 弾力性
          friction: 0.1, // 摩擦
          name: 'coin',
          render: {
            opacity: 1,
          },
        })
      );
    }

    // xxx
    this.ballCount += circles.length;

    World.add(engine.world, circles);
  }
}
