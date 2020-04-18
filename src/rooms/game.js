import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import Beast from '../entities/Beast.js'
import Weed from '../entities/Weed.js'

const weedPositions = [
  {x: 0.1, y: 0.1},
  {x: 0.35, y: 0.24},
  {x: 0.78, y: 0.47},
  {x: 0.2, y: 0.71},
  {x: 0.9, y: 0.83},
];


export default function gameRoom (width, height) {
  const background = new Background({
    color: 0x86844F,
    height: height,
    width: width
  });

  const beast = new Beast({x: width * 0.5, y: height * 0.5});

  const weeds = weedPositions.map(({x, y}) => {
    return new Weed({x: width * x, y: height * y});
  });

  return [background, beast, ...weeds];
}
