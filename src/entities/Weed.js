import hitagi from 'hitagi';

import weedImgUrl from '../sprites/weed.png';

export default function Weed(params) {
  return new hitagi.prefabs.Body({
      z: -1,
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: weedImgUrl,
      ...params,
    }));
}
