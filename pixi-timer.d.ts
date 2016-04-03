declare module PIXI {
  export let timerManager:timer.TimerManager;

  export module timer{
    export class TimerManager{
      constructor();
      timers:Timer[];
      update(delta:number):void;
      removeTimer(timer:Timer):void;
      addTimer(timer:Timer):void;
      createTimer(time:number):Timer;
    }

    export class Timer extends EventEmitter{
      constructor();
      time:number;
      manager:TimerManager;
      active:boolean;
      isStarted:boolean;
      isEnded:boolean;
      expire:boolean;
      delay:number;
      repeat:number;
      loop:boolean;
      addTo(manager:TimerManager):void;
      remove():void;
      start():void;
      stop():void;
      reset():void;
      update(delta:number, deltaMS?:number):void;
    }
  }
}

declare module 'pixi-timer' {
  export default PIXI.timer;
}