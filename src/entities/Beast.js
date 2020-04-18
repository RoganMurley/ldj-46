import hitagi from 'hitagi';

import Goto from '../components/Goto.js';

import beast1ImgUrl from '../sprites/beast-1.png';
import beast2ImgUrl from '../sprites/beast-2.png';

export default function Beast(params) {
  return new hitagi.prefabs.Body({...params})
    .attach(new hitagi.components.graphics.Sprite({
      path: [beast1ImgUrl, beast2ImgUrl],
      animationSpeed: 0,
      ...params,
    }))
    .attach({$id: 'beast'})
    .attach(new Goto({x: 0, y: 0, xspeed: 0, yspeed:0, ...params}));
}
