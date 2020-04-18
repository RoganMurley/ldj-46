import hitagi from 'hitagi';

import Bush from '../components/Bush.js';

import img from '../sprites/bush.png';

export default function (params) {
  return new hitagi.prefabs.StaticBody({
      width: 72,
      height: 72,
      z: -1,
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: img,
      rotation: Math.random() * 460,
      ...params,
    }))
    .attach(new Bush());
}
