import hitagi from 'hitagi';

import Goto from '../components/Goto.js';
import Camera from '../components/Camera.js';


export default function(params) {
  const {x, y} = params;
  return new hitagi.Entity()
    .attach(new hitagi.components.Position({x, y}))
    .attach(new Camera({}))
    .attach({
      $id: 'followCamera',
      cameraSpeed: 0.05,
      shake: {
        x: 0,
        y: 0,
      },
    });
}
