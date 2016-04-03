import plugins from './plugins';
import Game from './Game';
import config from './config';

//Force the typescript compiler to include this plugins in the bundle (avoid dead modules)
let _plugins = plugins;

//Init the game
let game = new Game(config);
game.initialize();
