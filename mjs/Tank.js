import { AnimatedSprite, Container, Texture, Sprite } from "./pixi.mjs";

export const createAnimatedSprite = (
  textures,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 },
) => {
  const newAnimatedSprite = new AnimatedSprite(textures);
  newAnimatedSprite.position.copyFrom(position);
  newAnimatedSprite.anchor.copyFrom(anchor);
  newAnimatedSprite.animationSpeed = 0.5;
  return newAnimatedSprite;
};

export const createSprite = (
  texture,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 },
) => {
  const newSprite = new Sprite(texture);
  newSprite.position.copyFrom(position);
  newSprite.anchor.copyFrom(anchor);
  return newSprite;
};

export class Tank {
  constructor(textures) {
    this._view = new Container();

    this._bodyContainer = new Container();

    this._tracksLeft = createAnimatedSprite(
      [textures["TrackСFrame1"], textures["TrackСFrame2"]],
      { x: 0, y: -80 },
    );

    this._tracksRight = createAnimatedSprite(
      [textures["TrackСFrame1"], textures["TrackСFrame2"]],
      { x: 0, y: 80 },
    );

    this._hull = createSprite(textures["HeavyHullB"]);
    this._bodyContainer.addChild(
      this._tracksLeft,
      this._tracksRight,
      this._hull,
    );

    this._towerContainer = new Container();

    const gunLeft = createSprite(textures["HeavyGunB"], { x: 140, y: -27 });
    const gunRight = createSprite(textures["HeavyGunB"], { x: 160, y: 29 });
    const gunConnector = createSprite(textures["GunConnectorD"], {
      x: 80,
      y: 0,
    });
    const bigTower = createSprite(textures["HeavyTowerB"]);
    this._towerContainer.addChild(gunLeft, gunRight, gunConnector);
    this._towerContainer.addChild(bigTower);
    this._view.addChild(this._bodyContainer, this._towerContainer);
  }

  set towerDirection(value) {
    this._towerContainer.rotation = value;
  }

  get towerDirection() {
    return this._towerContainer.rotation;
  }

  set bodyDirection(value) {
    this._bodyContainer.rotation = value;
  }

  get bodyDirection() {
    return this._bodyContainer.rotation;
  }

  get x() {
    return this._view.position.x;
  }

  set x(value) {
    return (this._view.position.x = value);
  }

  get y() {
    return this._view.position.y;
  }

  set y(value) {
    return (this._view.position.y = value);
  }

  get view() {
    return this._view;
  }

  startTracks() {
    this._tracksLeft.play();
    this._tracksRight.play();
  }

  stopTracks() {
    this._tracksLeft.stop();
    this._tracksRight.stop();
  }
}
