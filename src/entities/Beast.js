import hitagi from 'hitagi';

import Beast from '../components/Beast.js';
import Goto from '../components/Goto.js';
import Camera from '../components/Camera.js';

import img1 from '../sprites/beast-1.png';
import img2 from '../sprites/beast-2.png';

export default function(params) {
  return new hitagi.prefabs.Body({width: 92, height: 92, ...params})
    .attach(new hitagi.components.graphics.Sprite({
      path: [img1, img2],
      animationSpeed: 0,
      ...params,
    }))
    .attach(new Beast({}))
    .attach(new Goto({x: 0, y: 0, xspeed: 0, yspeed:0, ...params}))
}
