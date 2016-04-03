///<reference path="../typings/main.d.ts" />
///<reference path="../pixi-animationloop.d.ts" />
///<reference path="../pixi-scene.d.ts" />
///<reference path="../pixi-timer.d.ts" />
///<reference path="../pixi-tween.d.ts" />
///<reference path="../pixi-keyboard.d.ts" />
/*
  import all the plugins to extend pixi here.
*/
import AnimationLoopPlugin from 'pixi-animationloop';
import KeyboardPlugin from 'pixi-keyboard';
import TimerPlugin from 'pixi-timer';
import TweenPlugin from 'pixi-tween';
import ScenePlugin from 'pixi-scene';

export default {
  AnimationLoopPlugin:AnimationLoopPlugin,
  ScenePlugin:ScenePlugin,
  TimerPlugin:TimerPlugin,
  TweenPlugin:TweenPlugin,
  KeyboardPlugin:KeyboardPlugin
};
