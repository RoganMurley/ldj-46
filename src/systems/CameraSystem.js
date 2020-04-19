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
        const cameraSpeed = 0.05;
        const {position} = entity.c;
        const target = this.$tracked.beast.c.position;

        const xDiff = Math.abs(position.x - target.x);
        const yDiff = Math.abs(position.y - target.y);

        if (position.x < target.x) {
          position.x += xDiff * cameraSpeed;
        } else if (position.x > target.x) {
          position.x -= xDiff * cameraSpeed;
        }

        if (position.y < target.y) {
          position.y += yDiff * cameraSpeed;
        } else if (position.y > target.y) {
          position.y -= yDiff * cameraSpeed;
        }
      },
    };
  }
}
