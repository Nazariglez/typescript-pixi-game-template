declare module PIXI {
  export interface Container{
    update(delta:number):void;
  }

  export module scene{

    export class Scene extends Container{
      constructor(name?:string);
      name:string;
      manager:SceneManager;
      initialized:boolean;
      world:World;
      tweenManager:PIXI.tween.TweenManager;
      timerManager:PIXI.timer.TimerManager;
      init():void;
      update(delta:number):void;
      createWorld(resolutionX?:number, resolutionY?:number):World;
    }

    export class SceneManager extends Container{
      constructor(renderer:WebGLRenderer|CanvasRenderer);
      renderer:WebGLRenderer|CanvasRenderer;
      scenes:Scene[];
      scene:Scene;
      fixedHeight:number;
      fixedWidth:number;
      update(delta:number):void;
      addScene(scene:Scene):SceneManager;
      getSceneByName(name:string):Scene;
      goTo(name:string):SceneManager;
      createScene(name:string):Scene;
      resizeScenes():void;
    }

    export class World extends Container{
      constructor(scene:Scene);
      resolutionX:void|number;
      resolutionY:void|number;
      update(delta:number):void;
      checkResolution():void;
    }

  }
}

declare module 'pixi-scene' {
  export default PIXI.scene;
}