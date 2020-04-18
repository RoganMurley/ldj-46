import hitagi from 'hitagi';

import beast1ImgUrl from '../sprites/beast-1.png';
import beast2ImgUrl from '../sprites/beast-2.png';

export default function Beast(params) {
  return new hitagi.prefabs.Body({...params})
    .attach(new hitagi.components.graphics.Sprite({
      path: [beast1ImgUrl, beast2ImgUrl],
      animationSpeed: 0.08,
      ...params,
    }));
}
