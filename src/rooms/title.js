import hitagi from 'hitagi';

import Camera from '../components/Camera.js'
import Background from '../entities/Background.js'
import {makeWeeds} from '../entities/Weed.js'


const centre = {
  x: 999999,
  y: 999999,
};


export default function titleRoom (width, height, goalSystem) {
  const gameStartListener = new hitagi.Entity()
    .attach({$id: "gameStartListener"});

  const title = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      translate: {
        x: width * 0.5,
        y: height * 0.45,
      },
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: "Man's Best Friend",
      style: {
        font: '64px Sans-Serif',
        fill: 0xffffff,
      },
    }));


  const highscore = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      translate: {
        x: width * 0.5,
        y: height * 0.55,
      },
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: `Most Days of Friendship: ${goalSystem.bestTime}`,
      style: {
        font: '26px Sans-Serif',
        fill: 0xffffff,
      },
    }));


  const highscore2 = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      translate: {
        x: width * 0.5,
        y: height * 0.6,
      },
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: `Most Friends: ${goalSystem.bestFriends}`,
      style: {
        font: '26px Sans-Serif',
        fill: 0xffffff,
      },
    }));

  const camera = new hitagi.Entity()
    .attach(new hitagi.components.Position({...centre}))
    .attach(new Camera({}));

  const background = new Background({
    height: height,
    width: width
  });
  const weeds = makeWeeds(width, height);

  return [gameStartListener, title, highscore, highscore2, background, camera, ...weeds];
}
