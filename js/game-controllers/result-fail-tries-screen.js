import ResultFailTriesView from '../view/result-fail-tries-view';
import Application from '../application';


export default class ResultFailTriesScreen {
  constructor() {
    this.screen = new ResultFailTriesView();
    this.bind();
  }

  get element() {
    return this.screen.element;
  }

  bind() {
    this.screen.onClickReplay = () => Application.showWelcome();
  }
}
