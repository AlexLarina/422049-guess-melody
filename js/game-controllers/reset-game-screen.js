import GameRestartView from '../view/game-restart-view';
import Router from '../application';

export default class ResetGameScreen {
  constructor() {
    this.screen = new GameRestartView();
    this.bind();
  }

  get element() {
    return this.screen.element;
  }

  bind() {
    this.screen.onCancel = () => this.element.classList.add(`modal--hidden`);

    this.screen.onConfirm = () => {
      this.element.firstElementChild.classList.add(`modal--hidden`);
      Router.showWelcome();
    };
  }
}
