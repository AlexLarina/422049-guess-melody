import ResultSuccessView from '../view/result-success-view';
import Application from "../application";


export default class ResultSuccessScreen {
  constructor(model) {
    this.screen = new ResultSuccessView(model);
    this.bind();
  }

  get element() {
    return this.screen.element;
  }

  bind() {
    this.screen.onClickReplay = () => Application.showWelcome();
  }
}
