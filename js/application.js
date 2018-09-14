import {changeScreen} from "./util";
import GameScreen from './game-controllers/game-screen';
import WelcomeScreen from './game-controllers/welcome-screen';
import GameModel from './data/guess-melody-model';
import {MELODIES} from './data/data';
import ResultSuccessScreen from './game-controllers/result-success-screen';
import ResultFailTimeScreen from './game-controllers/result-fail-time-screen';
import ResultFailTriesScreen from './game-controllers/result-fail-tries-screen';

export default class Application {

  static showWelcome() {
    const welcomeScreen = new WelcomeScreen();
    changeScreen(welcomeScreen.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(MELODIES));
    changeScreen(gameScreen.element.firstElementChild);
    gameScreen.startGame();
  }

  static showResult(model) {
    const resultGame = new ResultSuccessScreen(model);
    changeScreen(resultGame.element);
  }

  static showFailTries() {
    const failTries = new ResultFailTriesScreen();
    changeScreen(failTries.element);
  }

  static showFailTime() {
    const timeTries = new ResultFailTimeScreen();
    changeScreen(timeTries.element);
  }
}
