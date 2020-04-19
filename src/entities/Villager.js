import hitagi from 'hitagi';

import Goto from '../components/Goto.js';
import Hunger from '../components/Hunger.js';
import Villager from '../components/Villager.js';

import img1 from '../sprites/villager-1.png';
import img2 from '../sprites/villager-2.png';

export default function (params) {
  const {size} = params;
  const hunger = params.hunger || 100000;
  return new hitagi.prefabs.Body({
      width: 28 * size,
      height: 68 * size,
      scale: {x: size, y: size},
      ...params,
    })
    .attach(new hitagi.components.graphics.Sprite({
      path: [img1, img2],
      animationSpeed: 0,
      ...params,
    }))
    .attach(new Villager({size}))
    .attach(new Goto({x: 0, y: 0, xspeed: 0, yspeed:0, ...params}))
    .attach(new Hunger({current: hunger, max: hunger, ...params}));
}
