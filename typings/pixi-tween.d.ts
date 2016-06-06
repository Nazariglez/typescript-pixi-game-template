declare module PIXI {
  export let tweenManager:tween.TweenManager;

  //todo fix this def

  export module tween{
    export class TweenManager{
      constructor();
      tweens:Tween[];
      update(delta:number):void;
      removeTween(tween:Tween):void;
      addTween(tween:Tween):void;
      createTween(target:any):Tween;
      getTweensForTarget(target:any):Tween[];
    }

    export class Tween extends PIXI.utils.EventEmitter{
      constructor(target:any, manager?:TweenManager);
      target:any;
      manager:TweenManager;
      time:number;
      active:boolean;
      easing:(num:number)=>number;
      expire:boolean;
      repeat:number;
      loop:boolean;
      delay:number;
      pingPong:boolean;
      isStarted:boolean;
      isEnded:boolean;
      path:TweenPath;
      pathReverse:boolean;
      addTo(manager:TweenManager):void;
      chain(tween:Tween):Tween;
      start():void;
      stop():void;
      to(object:any):void;
      from(object:any):void;
      remove():void;
      clear():void;
      reset():void;
      update(delta:number, deltaMS?:number);
    }

    export class TweenPath{
      constructor();
      closed:boolean;
      length:number;
      moveTo(x:number,y:number):TweenPath;
      lineTo(x:number,y:number):TweenPath;
      bezierCurveTo(cpX:number,cpY:number,cpX2:number,cpY2:number,toX:number,toY:number):TweenPath;
      quadraticCurveTo(cpX:number,cpY:number,toX:number,toY:number):TweenPath;
      arcTo(x1:number,y1:number,x2:number,y2:number,radius:number):TweenPath;
      arc(cx:number,cy:number,radius:number,startAngle:number,endAngle:number,anticlockwise:boolean):TweenPath;
      drawShape(shape:any):TweenPath;
      clear():TweenPath;
    }

    export class Easing{
      static linear():(num:number)=>number;
      static inQuad():(num:number)=>number;
      static outQuad():(num:number)=>number;
      static inOutQuad():(num:number)=>number;
      static inCubic():(num:number)=>number;
      static outCubic():(num:number)=>number;
      static inOutCubic():(num:number)=>number;
      static inQuart():(num:number)=>number;
      static outQuart():(num:number)=>number;
      static inOutQuart():(num:number)=>number;
      static inQuint():(num:number)=>number;
      static outQuint():(num:number)=>number;
      static inOutQuint():(num:number)=>number;
      static inSine():(num:number)=>number;
      static outSine():(num:number)=>number;
      static inOutSine():(num:number)=>number;
      static inExpo():(num:number)=>number;
      static outExpo():(num:number)=>number;
      static inOutExpo():(num:number)=>number;
      static inCirc():(num:number)=>number;
      static outCirc():(num:number)=>number;
      static inOutCirc():(num:number)=>number;
      static inElastic():(num:number)=>number;
      static outElastic():(num:number)=>number;
      static inOutElastic():(num:number)=>number;
      static inBack():(num:number)=>number;
      static outBack():(num:number)=>number;
      static inOutBack():(num:number)=>number;
      static inBounce():(num:number)=>number;
      static outBounce():(num:number)=>number;
      static inOutBounce():(num:number)=>number;
    }
  }
}

declare module 'pixi-tween' {
  export default PIXI.tween;
}
