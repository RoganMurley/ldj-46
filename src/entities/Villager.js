import hitagi from 'hitagi';

import Goto from '../components/Goto.js';
import Villager from '../components/Villager.js';

import img1 from '../sprites/villager-1.png';
import img2 from '../sprites/villager-2.png';

export default function (params) {
  return new hitagi.prefabs.Body({
      width: 28,
      height: 68,
      ...params,
    })
    .attach(new hitagi.components.graphics.Sprite({
      path: [img1, img2],
      animationSpeed: 0,
      ...params,
    }))
    .attach(new Villager({}))
    .attach(new Goto({x: 0, y: 0, xspeed: 0, yspeed:0, ...params}));
}
