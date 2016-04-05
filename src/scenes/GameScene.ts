export default class GameScene extends PIXI.scene.Scene{
  background:PIXI.Graphics;
  name:string = "gameScene";

  constructor(){
    super();
    this.on('init', this._init);
  }

  private _init():void{
    let ww = this.manager.fixedWidth/2;
    let hh = this.manager.fixedHeight/2;

    this.background = new PIXI.Graphics()
      .beginFill(0x000000)
      .drawRect(-ww, -hh,this.manager.fixedWidth, this.manager.fixedHeight)
      .endFill();

    this.addChild(this.background);
  }
}