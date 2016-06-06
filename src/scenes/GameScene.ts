import config from '../config';

export default class GameScene extends PIXI.scene.Scene{
  background:PIXI.Graphics;
  name:string = "gameScene";

  constructor(){
    super();
    this.on('init', this._init);
  }

  private _init():void{
    this.createWorld(config.game.port.width, config.game.port.height);

    let ww = config.game.port.width/2;
    let hh = config.game.port.height/2;

    this.background = new PIXI.Graphics()
      .beginFill(0x000000)
      .drawRect(-ww, -hh,config.game.port.width, config.game.port.height)
      .endFill();

    this.world.addChild(this.background);
  }
}
