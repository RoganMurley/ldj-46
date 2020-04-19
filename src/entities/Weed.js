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


const weedPositions = [
  {x: 100, y: 100},
  {x: 350, y: 240},
  {x: 780, y: 340},
  {x: 870, y: 140},
  {x: 200, y: 710},
  {x: 500, y: 900},
  {x: 900, y: 830},
];


export function makeWeeds(width, height) {
  return weedPositions.map(({x, y}) => {
    return new Weed({x, y, size: 1});
  });
}
