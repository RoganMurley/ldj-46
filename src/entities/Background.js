export default function Background({color, width, height}) {
  return new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
        anchor: {
            x: 0,
            y: 0,
        },
        relative: false,
        z: -100,
    }))
    .attach(new hitagi.components.graphics.Rectangle({
        color,
        height,
        width,
    }));
}
