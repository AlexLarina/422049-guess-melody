import GameHeaderView from '../view/game-header-view';
import LevelArtistView from '../view/level-artist-view';
import LevelGenreView from '../view/level-genre-view';
import ResetGameScreen from './reset-game-screen';
import {user, SECOND} from "../data/game-const-data";
import {countPoints} from "../utilities/count-points";
import Application from '../application';
import {mainElement} from '../util';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.init();
    this.bind();
  }

  init() {
    this.header = new GameHeaderView(this.model.state);
    this.modal = new ResetGameScreen();
    this.levelType(this.model.levelGame);
    this.mainElement = mainElement;
    this.second = SECOND;
    this.root = document.createElement(`div`);
    this.root.appendChild(this.level.element);
    this.level.element.insertBefore(this.header.element, this.level.element.firstElementChild);
  }

  get element() {
    return this.root;
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.model.tick();
      this.updateHeader();
      this.startTimer();
    }, this.second);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  startGame() {
    this.restart();
    this.changeLevel(this.level);
    this.startTimer();
  }

  restart() {
    this.model.restart();
    user.clear();
  }

  endGame() {
    this.restart();
    Application.showFailTime();
  }

  bind() {
    this.header.restartGame = () => {
      this.stopTimer();
      this.modal.element.classList.remove(`modal--hidden`);
      this.level.element.insertBefore(this.modal.element, this.root.element);
    };
  }

  updateHeader() {
    this.header = new GameHeaderView(this.model.state);
    this.level.element.replaceChild(this.header.element, this.level.element.firstElementChild);
    this.header.element.restartGame = this.bind();
  }

  levelType(level) {
    switch (level.type) {
      case `genre`:
        this.level = new LevelGenreView(level);
        break;
      case `artist`:
        this.level = new LevelArtistView(level);
        break;
    }
  }

  changeLevel(level) {
    if (level instanceof LevelGenreView) {
      level.onAnswerClick = this.answerGenre.bind(this);
    }
    if (level instanceof LevelArtistView) {
      level.onAnswerClick = this.answerArtist.bind(this);
    }
    this.changeLevelContent(level);
  }

  changeLevelContent(view) {
    view.element.insertBefore(this.header.element, view.element.firstElementChild);
    this.mainElement.replaceChild(view.element, this.mainElement.firstElementChild);
  }

  validateLevel() {
    if (this.model.hasNextLevel()) {
      this.model.nextLevel();
      this.levelType(this.model.levelGame);
      this.changeLevel(this.level);
      this.updateHeader();
      this.startTimer();
    } else {
      this.model.result = {
        score: countPoints([...user], this.model.state.lives),
        lives: this.model.state.lives,
        time: this.model.state.time,
      };
      Application.showResult(this.model);
    }
  }

  answerGenre(answers) {
    this.stopTimer();
    const userAnswers = answers.filter((it) => it.checked);
    const correctResult = userAnswers.some((it) => it.value === this.model.levelGame.answer);

    if (correctResult) {
      user.add({result: true, time: this.model.state.time});
    } else {
      try {
        this.model.die();
        user.add({result: false, time: this.model.state.time});
      } catch (e) {
        Application.showFailTries();
        return;
      }
    }
    this.validateLevel();
  }

  answerArtist(answer) {
    this.stopTimer();
    const correctResult = answer.value === this.model.levelGame.question.name;

    if (correctResult) {
      user.add({result: true, time: this.model.state.time});
    } else {
      try {
        this.model.die();
        user.add({result: false, time: this.model.state.time});
      } catch (e) {
        Application.showFailTries();
        return;
      }
    }
    this.validateLevel();
  }
}
