import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import Beast from '../entities/Beast.js'
import Bush from '../entities/Bush.js'
import FollowCamera from '../entities/FollowCamera.js'
import {makeWeeds} from '../entities/Weed.js'
import Villager from '../entities/Villager.js'

// Weird hitagi translate bug
const centre = {
  x: 999999,
  y: 999999,
};


export default function gameRoom (width, height) {
  const background = new Background({
    height: height,
    width: width
  });

  const beast = new Beast({x: centre.x, y: centre.y});
  const followCamera = new FollowCamera({x: centre.x, y: centre.y});
  const bushes = [
    new Bush({x: centre.x - 228, y: centre.y - 228, size: 1.1}),
    new Bush({x: centre.x - 228, y: centre.y + 228, size: 0.9}),
    new Bush({x: centre.x + 228, y: centre.y - 228, size: 1.2}),
    new Bush({x: centre.x + 228, y: centre.y + 228, size: 1}),
  ];
  const villagers = [
    new Villager({x: centre.x - 228, y: centre.y - 128, size: 1, hunger: 50000}),
    new Villager({x: centre.x - 228, y: centre.y + 128, size: 1, hunger: 18000}),
    new Villager({x: centre.x + 228, y: centre.y - 128, size: 1, hunger: 16000}),
    new Villager({x: centre.x + 228, y: centre.y + 128, size: 1, hunger: 15000}),
  ];
  const weeds = makeWeeds(width, height);
  const score = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      anchor: {
        x: 0,
        y: 0,
      },
      translate: {
        x: 10,
        y: 5,
      },
      z: 1000,
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: "0 days of friendship",
      style: {
        font: '32px Sans-Serif',
        fill: 0xffffff,
      },
    }))
    .attach({$id: 'score'});
  const friends = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      anchor: {
        x: 0,
        y: 0,
      },
      translate: {
        x: 10,
        y: 40,
      },
      z: 1000,
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: "4 friends",
      style: {
        font: '32px Sans-Serif',
        fill: 0xffffff,
      },
    }))
    .attach({$id: 'friends'});

  return [background, score, friends, beast, followCamera, ...bushes, ...villagers, ...weeds];
}
