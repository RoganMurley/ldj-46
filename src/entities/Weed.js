import hitagi from 'hitagi';

import WeedComponent from '../components/weed.js';

import weedImgUrl from '../sprites/weed.png';

export default function Weed(params) {
  const {size} = params;
  return new hitagi.prefabs.StaticBody({
      width: 12 * size,
      height: 12 * size,
      z: -1,
      scale: {x: size, y: size},
      ...params,
    })
    .attach(new hitagi.components.graphics.StaticSprite({
      path: weedImgUrl,
      ...params,
    }))
    .attach(new WeedComponent({size}));
}


export function makeWeeds(width, height) {
  const weeds = [];
  const count = 24;
  const pi = 3.145;
  const angle = 2 * pi / count;
  const radius = 400;
  for (let i = 0; i < count; i++) {
    weeds.push(
      new Weed({
        x: width * 0.5 + radius * Math.cos(i * angle),
        y: height * 0.5 + radius * Math.sin(i * angle),
        size: 1
      })
    );
  }
  return weeds;
}
