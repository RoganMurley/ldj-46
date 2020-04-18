import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import Beast from '../entities/Beast.js'


export default function gameRoom (width, height) {
  const background = new Background({
    color: 0X9a6319,
    height: height,
    width: width
  });
  const beast = new Beast({x: width * 0.5, y: height * 0.5});
  return [background, beast];
}
