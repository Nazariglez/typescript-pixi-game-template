import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';

export default class Game {
  renderer:PIXI.WebGLRenderer|PIXI.CanvasRenderer;
  animationLoop:PIXI.AnimationLoop;

  constructor(config:any){
    const Renderer:any = (config.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
    this.renderer = new Renderer(config.width || 800, config.height || 600, config.rendererOptions);
    document.body.appendChild(this.renderer.view);

    this.animationLoop = new PIXI.AnimationLoop(this.renderer, new PIXI.scene.SceneManager(this.renderer));
    this.animationLoop.stopOnVisibilityChange = true;
    this.animationLoop.on('prerender', this.update.bind(this));
    this.animationLoop.on('postrender', this._updateManagers.bind(this));
  }

  initialize():void{
    this.stage.fixedWidth = 600;
    this.stage.fixedHeight = 800;

    let gameScene:GameScene = new GameScene();
    this.stage.addScene(gameScene);

    let loaderScene:LoaderScene = new LoaderScene();
    loaderScene.load(()=>this.stage.goTo('gameScene'));
    this.stage.addScene(loaderScene);
    this.stage.scene = loaderScene;

    this.start();
  }

  update():void{
    if(this.stage.update)this.stage.update(this.animationLoop.delta);
  }

  _updateManagers():void{
    PIXI.keyboardManager.update(); //keyboard don't need the delta time
    PIXI.tweenManager.update(this.animationLoop.delta);
    PIXI.timerManager.update(this.animationLoop.delta);
  }

  start():void{
    this.animationLoop.start();
  }

  stop():void{
    this.animationLoop.stop();
  }

  get stage():PIXI.scene.SceneManager{
    return <PIXI.scene.SceneManager>this.animationLoop.stage;
  }

  set stage(stage:PIXI.scene.SceneManager){
    this.animationLoop.stage = stage;
  }
}
