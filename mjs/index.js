import { Application, Graphics, Assets } from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";

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

  app.stage.addChild(marker);
  app.stage.position.set(800 / 2, 800 / 2);
  document.body.appendChild(app.canvas);
})();
