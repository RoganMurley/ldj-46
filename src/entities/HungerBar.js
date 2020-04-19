import hitagi from 'hitagi';

import HungerBar from '../components/HungerBar';


export default function (params) {
  const width = 32;
  const height = 6;
  return new hitagi.prefabs.Base({
      width,
      height,
      z: 50,
      ...params,
    })
    .attach(new hitagi.components.graphics.Rectangle({
      color: 0xfff,
      width,
      height,
      ...params,
    }))
    .attach(new HungerBar(params));
}
