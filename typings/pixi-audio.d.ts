declare module PIXI {
  export let audioManager:audio.AudioManager;
  namespace loaders{
    export function audioParser():(resource:Resource, cb:()=>void)=>void;
  }

  export module audio{
    export class AudioManager{
      constructor();
      getAudio(name:string):Audio;
      removeAudio(audio:Audio):void;
      filterAudios(tag:string, value?:any):Audio[];
      mute():void;
      unmute():void;
      pause():void;
      resume():void;
    }

    export class Audio extends EventEmitter{
      constructor(data:HTMLAudioElement|AudioBuffer, manager:AudioManager);
      manager:AudioManager;
      data:AudioBuffer|HTMLAudioElement;
      playing:boolean;
      paused:boolean;
      loop:boolean;
      volume:number;
      muted:boolean;
      play():void;
      stop():void;
      remove():void;
    }

    export function audioParser():(resource:PIXI.loaders.Resource, cb:()=>void)=>void;
  }
}

declare module 'pixi-audio' {
  export default PIXI.audio;
}