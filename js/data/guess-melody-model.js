import {INITIAL_GAME, stats} from './game-const-data';
import {changeLevel} from "../utilities/change-level";
import {showGameResult} from "../utilities/show-game-result";
import {decreaseLives} from "../utilities/decrease-lives";

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get result() {
    return this._showResalt;
  }

  get scoring() {
    return this._showResalt.score;
  }

  set result(user) {
    this._showResalt = user;
  }

  get endGame() {
    return showGameResult(stats, this.result);
  }

  get levelGame() {
    return this.data[this._state.level];
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME);
  }

  hasNextLevel() {
    return this.data[this._state.level + 1] !== void 0;
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  die() {
    this._state = decreaseLives(this._state);
  }

  tick() {
    this._state = Object.assign({}, this.state, {time: this._state.time - 1});
  }
}
