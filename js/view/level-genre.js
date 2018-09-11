import AbstractView from "./abstract-view";

export default class levelGenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">
        <!-- здесь trackTemplate -->
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>`;
  }

  trackTemplate() {
    return `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
            <label class="game__check" for="answer-4">Отметить</label>
          </div>
        </div>`;
  }

  bind() {
    const submitButton = this.element.querySelector(`.game__submit`);

    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswerClick();
    });
  }

  onAnswerClick() {}
}
