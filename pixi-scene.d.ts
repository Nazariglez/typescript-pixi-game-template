declare module PIXI {
  export interface Container{
    update(delta:number):void;
  }

  export class Scene extends Container{
    new(name:string);
    name:string;
    manager:SceneManager;
    initialized:boolean;
    init():void;
    update(delta:number):void;
  }

  export class SceneManager extends Container{
    constructor(renderer:WebGLRenderer|CanvasRenderer);
    scenes:Scene[];
    scene:Scene;
    fixedHeight:number;
    fixedWidth:number;
    update(delta:number):void;
    addScene(scene:Scene):SceneManager;
    getSceneByname(name:string):Scene;
    goTo(name:string):SceneManager;
    createScene(name:string):Scene;
    resizeScenes():void;
  }
}

interface SceneInterface {
  Scene:PIXI.Scene;
  SceneManager:PIXI.SceneManager;
}

declare module 'pixi-scene' {
  export default {
    Scene:PIXI.Scene,
    SceneManager:PIXI.SceneManager,
  };
}