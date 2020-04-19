import {distance} from '../utils.js';


export default class CameraSystem {
  constructor(width, height, renderSystem, controlsSystem) {
    this.$tracking = {
      camera: 'single',
      beast: 'single',
    };

    this.getTranslation = () => {
      const camera = this.$tracked.camera;
      if (!camera) {
        return {
          x: 0,
          y: 0,
        };
      }
      return {
        x: width * 0.5 - camera.c.position.x,
        y: height * 0.5 - camera.c.position.y,
      };
    };

    controlsSystem.cameraGetMousePos = () => {
      const {x, y} = controlsSystem.getMousePos();
      const translate = this.getTranslation();
      return {
        x: x - translate.x,
        y: y - translate.y,
      };
    }

    const updateEntityTranslation = (entity) => {
      const {relative, translate} = entity.c.graphic;
      if (!relative) {
        return;
      }
      const {x, y} = this.getTranslation();
      translate.x = x;
      translate.y = y;
    };

    this.build = {
      graphic: (entity) => {
        updateEntityTranslation(entity);
      },
    };

    this.update = {
      graphic: (entity, dt) => {
        updateEntityTranslation(entity);
      },
      followCamera: (entity, dt) => {
        // Follow the camera.
        const {position, followCamera} = entity.c;
        const target = this.$tracked.beast.c.position;
        const speed = followCamera.cameraSpeed;

        const xDiff = Math.abs(position.x - target.x);
        const yDiff = Math.abs(position.y - target.y);

        if (position.x < target.x) {
          position.x += xDiff * speed;
        } else if (position.x > target.x) {
          position.x -= xDiff * speed;
        }

        if (position.y < target.y) {
          position.y += yDiff * speed;
        } else if (position.y > target.y) {
          position.y -= yDiff * speed;
        }

        // Shake the camera.
        followCamera.shake.x *= 0.9;
        followCamera.shake.y *= 0.9;

        if (Math.random() > 0.5) {
          position.x += followCamera.shake.x;
        } else {
          position.x -= followCamera.shake.x;
        }
        if (Math.random() > 0.5) {
          position.y += followCamera.shake.y;
        } else {
          position.y += followCamera.shake.y;
        }
      },
    };
  }
}
