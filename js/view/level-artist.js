import AbstractView from "./abstract-view";

export default class levelArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        <!-- здесь ArtistTemplate -->
      </form>
    </section>
  </section>`;
  }

  artistTemplate() {
    return ` <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
          <label class="artist__name" for="answer-3">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Lorde
          </label>
        </div>`;
  }

  bind() {
    const gameArtistForm = this.element.querySelector(`.game__artist`);

    gameArtistForm.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      gameArtistForm.onAnswerClick();
    });
  }

  onAnswerClick() {}
}
