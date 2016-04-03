declare module PIXI {
  export let tweenManager:tween.TweenManager;

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

    export class Tween{
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

    export interface Easing{
      linear:(num:number)=>number;
      inQuad:(num:number)=>number;
      outQuad:(num:number)=>number;
      inOutQuad:(num:number)=>number;
      inCubic:(num:number)=>number;
      outCubic:(num:number)=>number;
      inOutCubic:(num:number)=>number;
      inQuart:(num:number)=>number;
      outQuart:(num:number)=>number;
      inOutQuart:(num:number)=>number;
      inQuint:(num:number)=>number;
      outQuint:(num:number)=>number;
      inOutQuint:(num:number)=>number;
      inSine:(num:number)=>number;
      outSine:(num:number)=>number;
      inOutSine:(num:number)=>number;
      inExpo:(num:number)=>number;
      outExpo:(num:number)=>number;
      inOutExpo:(num:number)=>number;
      inCirc:(num:number)=>number;
      outCirc:(num:number)=>number;
      inOutCirc:(num:number)=>number;
      inElastic:(num:number)=>number;
      outElastic:(num:number)=>number;
      inOutElastic:(num:number)=>number;
      inBack:(num:number)=>number;
      outBack:(num:number)=>number;
      inOutBack:(num:number)=>number;
      inBounce:(num:number)=>number;
      outBounc:(num:number)=>number;
      inOutBounce:(num:number)=>number;
    }
  }
}

declare module 'pixi-tween' {
  export default PIXI.tween;
}