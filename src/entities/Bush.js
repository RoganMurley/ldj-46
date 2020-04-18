import hitagi from 'hitagi';

import Bush from '../components/Bush.js';

import img from '../sprites/bush.png';

export default function (params) {
  const {size} = params;
  return new hitagi.prefabs.StaticBody({
      width: 72 * size,
      height: 72 * size,
      scale: {x: size, y: size},
      z: -1,
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: img,
      rotation: Math.random() * 460,
      ...params,
    }))
    .attach(new Bush({...params}));
}
