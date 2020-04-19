import hitagi from 'hitagi';

import Camera from '../components/Camera.js'
import Background from '../entities/Background.js'
import {makeWeeds} from '../entities/Weed.js'

export default function titleRoom (width, height) {
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
      copy: "Biped's Best Friend",
      style: {
        font: '64px Sans-Serif',
        fill: 0xA00404,
      },
    }));

  const subtitle = new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
      relative: false,
      translate: {
        x: width * 0.5,
        y: height * 0.6,
      },
    }))
    .attach(new hitagi.components.graphics.Text({
      copy: 'Ludum Dare 46',
      style: {
        font: '32px Sans-Serif',
        fill: 0xA00404,
      },
    }));

  const camera = new hitagi.Entity()
    .attach(new hitagi.components.Position({
      x: width * 0.5,
      y: height * 0.5,
    }))
    .attach(new hitagi.components.Velocity({
      xspeed: 10,
      yspeed: 5,
    }))
    .attach(new Camera({}));

  const background = new Background({
    height: height,
    width: width
  });
  const weeds = makeWeeds(width, height);

  return [gameStartListener, title, subtitle, background, camera, ...weeds];
}
