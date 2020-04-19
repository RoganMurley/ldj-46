export function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function getNearest(from, entities) {
  let nearestEntity = null;
  let nearestDist = Infinity();
  entities.forEach((to) => {
    const dist = distance(from.c.position, to.c.position);
    if (dist < nearestDist) {
      nearestEntity = to;
      nearestDist = dist;
    }
  });
  return nearestEntity;
}

export function moveTo(entity, destination, speed) {
  const {position, goto} = entity.c;
  goto.x = destination.x;
  goto.y = destination.y;

  const diffX = Math.abs(position.x - goto.x);
  const diffY = Math.abs(position.y - goto.y);
  let speedX = speed;
  let speedY = speed;

  if (diffX > diffY) {
    speedY *= (diffY / diffX);
  } else {
    speedX *= (diffX / diffY);
  }

  goto.xspeed = speedX;
  goto.yspeed = speedY;
}
