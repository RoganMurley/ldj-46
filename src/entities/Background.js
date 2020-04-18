export default function({color, width, height, ...params}) {
  return new hitagi.Entity()
    .attach(new hitagi.components.graphics.Graphic({
        anchor: {
            x: 0,
            y: 0,
        },
        relative: false,
        z: -100,
        ...params,
    }))
    .attach(new hitagi.components.graphics.Rectangle({
        color: 0x86844F,
        height,
        width,
        ...params,
    }));
}
