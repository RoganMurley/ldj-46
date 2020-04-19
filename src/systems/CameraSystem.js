import {distance} from '../utils.js';


export default class CameraSystem {
  constructor(width, height, renderSystem, controlsSystem) {
    this.$tracking = {
      camera: 'single',
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
    };
  }
}
