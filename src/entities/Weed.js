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
  {x: 0.1, y: 0.1},
  {x: 0.35, y: 0.24},
  {x: 0.78, y: 0.34},
  {x: 0.87, y: 0.14},
  {x: 0.2, y: 0.71},
  {x: 0.5, y: 0.9},
  {x: 0.9, y: 0.83},
];


export function makeWeeds(width, height) {
  return weedPositions.map(({x, y}) => {
    return new Weed({x: width * x, y: height * y, size: 1});
  });
}
