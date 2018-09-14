import ResultFailTimeView from '../view/result-fail-time-view';
import Application from '../application';

export default class ResultFailTimeScreen {
  constructor() {
    this.screen = new ResultFailTimeView();
    this.bind();
  }

  get element() {
    return this.screen.element;
  }

  bind() {
    this.screen.onClickReplay = () => Application.showGame();
  }
}
