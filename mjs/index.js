import * as PIXI from "./pixi.mjs";

(async () => {
  const app = new PIXI.Application();

  await app.init({
    background: "black",
    width: 600,
    view: document.getElementById("canvas"),
    height: 600,
  });

  document.body.appendChild(app.canvas);
})();
