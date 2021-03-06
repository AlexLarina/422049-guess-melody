import AbstractView from "./abstract-view";

export default class LevelGenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
    <section class="game game--genre">
      <section class="game__screen">
        <h2 class="game__title">${this.level.title}</h2>
        <form class="game__tracks">
           ${this.level.questions.map((question, it) => this.templateAnswer(question, it).trim()).join(``)}
           <button class="game__submit button" type="submit" disabled>Ответить</button>
        </form>
      </section>
    </section>`;
  }

  templateAnswer(question, it) {
    return `
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio src="${question.src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${question.genre}" id="answer-${it}">
          <label class="game__check" ${this.level.answer} for="answer-${it}">Отметить</label>
        </div>
      </div>`;
  }

  bind() {
    const sendButton = this.element.querySelector(`.game__submit`);
    const gameGenreForm = this.element.querySelector(`.game__tracks`);
    const gameGenreAnswers = [...gameGenreForm.elements.answer];

    const playButtons = [...this.element.querySelectorAll(`.track__button`)];
    const musicsPlayers = [...this.element.querySelectorAll(`audio`)];

    playButtons.forEach((btn, index) => {
      btn.addEventListener(`click`, (event) => {
        event.preventDefault();

        if (btn.classList.contains(`track__button--pause`)) {
          btn.classList.remove(`track__button--pause`);
          musicsPlayers[index].pause();
        } else {
          for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].classList.remove(`track__button--pause`);
            musicsPlayers[i].pause();
          }

          btn.classList.add(`track__button--pause`);
          musicsPlayers[index].play();
        }
      });
    });

    gameGenreAnswers.forEach((it) => {
      it.addEventListener(`change`, () => {
        sendButton.disabled = !(gameGenreAnswers.some((item) => item.checked));
      });
    });

    sendButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswerClick(gameGenreAnswers);
      gameGenreForm.reset();
      sendButton.disabled = true;
    });
  }

  onAnswerClick() {}
}
