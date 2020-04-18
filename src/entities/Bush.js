import hitagi from 'hitagi';

import img from '../sprites/bush.png';

export default function (params) {
  return new hitagi.prefabs.Body({
      z: -1,
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: img,
      rotation: Math.random() * 460,
      ...params,
    }))
    .attach({$id: 'bush'});
}
