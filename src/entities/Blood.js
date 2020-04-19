import hitagi from 'hitagi';

import Blood from '../components/Blood';

import img from '../sprites/blood.png';


export default function (params) {
  const {size} = params;
  return new hitagi.prefabs.Static({
      width: 52 * size,
      height: 32 * size,
      scale: {x: size, y: size},
      z: -100,
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: img,
      rotation: Math.random() * 460,
      ...params,
    }))
    .attach(new Blood(params));
}
