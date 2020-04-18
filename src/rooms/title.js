import hitagi from 'hitagi';

import Background from '../entities/Background.js'
import {makeWeeds} from '../entities/Weed.js'

export default function titleRoom (width, height) {
  const gameStartListener = new hitagi.Entity()
    .attach({$id: "gameStartListener"});

  const title = new hitagi.Entity()
    .attach(new hitagi.components.Position({
      x: width * 0.5,
      y: height * 0.45
    }))
    .attach(new hitagi.components.graphics.Graphic())
    .attach(new hitagi.components.graphics.Text({
      copy: 'The Beast Weeps',
      style: {
        font: '6rem Sans-Serif',
        fill: 0x4B4A26,
      },
    }));

  const subtitle = new hitagi.Entity()
    .attach(new hitagi.components.Position({
      x: width * 0.5,
      y: height * 0.6
    }))
    .attach(new hitagi.components.graphics.Graphic())
    .attach(new hitagi.components.graphics.Text({
      copy: 'Ludum Dare 46: Keep it alive',
      style: {
        font: '2rem Sans-Serif',
        fill: 0x4B4A26,
      },
    }));

  const background = new Background({
    height: height,
    width: width
  });
  const weeds = makeWeeds(width, height);

  return [gameStartListener, title, subtitle, background, ...weeds];
}
