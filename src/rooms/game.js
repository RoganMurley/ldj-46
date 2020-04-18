import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import Beast from '../entities/Beast.js'
import {makeWeeds} from '../entities/Weed.js'


export default function gameRoom (width, height) {
  const background = new Background({
    height: height,
    width: width
  });

  const beast = new Beast({x: width * 0.5, y: height * 0.5});

  const weeds = makeWeeds(width, height);

  return [background, beast, ...weeds];
}
