import { Application, Graphics, Assets, Rectangle } from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";
import { Tank } from "./Tank.js";

(async () => {
  const app = new Application();

  await app.init({
    background: "gray",
    width: 800,
    view: document.getElementById("canvas"),
    height: 800,
  });

  const textures = await Assets.load(assetsMap.sprites);

  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  marker.drawCircle(0, 0, 5);
  marker.endFill();
  const tank = new Tank(textures);
  app.stage.addChild(tank.view);
  app.stage.addChild(marker);
  app.stage.position.set(800 / 2, 800 / 2);
  document.body.appendChild(app.canvas);

  app.stage.on("pointerdown", (event) => {
    const data = event.data;
    const position = data.getLocalPosition(app.stage);
    app.stage.addChild(
      new Graphics()
        .beginFill("red", 1)
        .drawCircle(position.x, position.y, 10)
        .endFill(),
    );
  });
  app.stage.interactive = true;
  app.stage.interactiveChildren = false;
  app.stage.hitArea = new Rectangle(-400, -400, 800, 800);
})();
