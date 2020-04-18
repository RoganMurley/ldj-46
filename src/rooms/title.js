import hitagi from 'hitagi';

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
        fill: '#fff'
      }
    }));

  const author = new hitagi.Entity()
    .attach(new hitagi.components.Position({
      x: width * 0.5,
      y: height * 0.6
    }))
    .attach(new hitagi.components.graphics.Graphic())
    .attach(new hitagi.components.graphics.Text({
      copy: 'A Rogan Murley Game',
      style: {
        font: '2rem Sans-Serif',
        fill: '#fff'
      }
    }));

  return [gameStartListener, title, author];
}
