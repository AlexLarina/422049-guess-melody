import AbstractView from "./abstract-view";

export default class ResultFailTimeView extends AbstractView {
  constructor() {
    super();

  }

  getTemplate() {
    return `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;
  }

  bind() {
    const replayButton = this.element.querySelector(`.result__replay`);

    replayButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onReplayClick();
    });
  }

  onReplayClick() {}
}
