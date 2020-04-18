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
    return new Weed({x: width * x, y: height * y});
  });
}
