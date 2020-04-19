import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import Beast from '../entities/Beast.js'
import Bush from '../entities/Bush.js'
import FollowCamera from '../entities/FollowCamera.js'
import {makeWeeds} from '../entities/Weed.js'
import Villager from '../entities/Villager.js'


export default function gameRoom (width, height) {
  const background = new Background({
    height: height,
    width: width
  });

  const beast = new Beast({x: width * 0.5, y: height * 0.5});
  const bush = new Bush({x: width * 0.75, y: height * 0.25, size: 1});
  const followCamera = new FollowCamera({x: width * 0.5, y: height * 0.5});
  const villagers = [
    new Villager({x: width * 0.4, y: height * 0.4, size: 1}),
    new Villager({x: width * 0.4, y: height * 0.6, size: 1}),
    new Villager({x: width * 0.6, y: height * 0.4, size: 1}),
    new Villager({x: width * 0.6, y: height * 0.6, size: 1}),
  ];
  const weeds = makeWeeds(width, height);

  return [background, beast, followCamera, bush, ...villagers, ...weeds];
}
