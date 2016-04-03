///<reference path="../typings/main.d.ts" />
///<reference path="../typings/pixi-animationloop.d.ts" />
///<reference path="../typings/pixi-scene.d.ts" />
///<reference path="../typings/pixi-timer.d.ts" />
///<reference path="../typings/pixi-tween.d.ts" />
///<reference path="../typings/pixi-keyboard.d.ts" />
///<reference path="../typings/pixi-audio.d.ts" />
/*
  import all the plugins to extend pixi here.
*/
import AnimationLoopPlugin from 'pixi-animationloop';
import KeyboardPlugin from 'pixi-keyboard';
import TimerPlugin from 'pixi-timer';
import TweenPlugin from 'pixi-tween';
import ScenePlugin from 'pixi-scene';
import AudioPlugin from 'pixi-audio';

export default {
  AnimationLoopPlugin:AnimationLoopPlugin,
  ScenePlugin:ScenePlugin,
  TimerPlugin:TimerPlugin,
  TweenPlugin:TweenPlugin,
  KeyboardPlugin:KeyboardPlugin,
  AudioPlugin:AudioPlugin
};