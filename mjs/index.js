import * as PIXI from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";

(async () => {
  const app = new PIXI.Application();

  await app.init({
    background: "gray",
    width: 800,
    view: document.getElementById("canvas"),
    height: 800,
  });

  const textures = await PIXI.Assets.load(assetsMap.sprites);
  console.log(textures);
  document.body.appendChild(app.canvas);
})();
