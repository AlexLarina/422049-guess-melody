import {createNodefromTemplate} from "./util";
import {gameHeaderData} from "./data";

export const getGameHeader = (data) => {
  const headerTemplate = `
      <a class="game__back" href="#">
        <span class="visually-hidden">${data.titleHint}</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">${data.minutes}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${data.seconds}</span>
      </div>

      <div class="game__mistakes">
      ${new Array(data.mistakes).fill(`<div class="wrong"></div>`).join(``)};
      </div>`;

  return createNodefromTemplate(headerTemplate, `header`, `game__header`);
};

export const gameArtist = (level) => {

  const gameArtistTemplate = `
    ${getGameHeader(gameHeaderData)}
    <section class="game__screen">
      <h2 class="game__title">${level.question}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        ${new Array([...level.answers].length).fill(`<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
          <label class="artist__name" for="answer-1">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Пелагея
          </label>
        </div>`).join(``)}
      </form>
    </section>
  `;

  return createNodefromTemplate(gameArtistTemplate, `section`, `game game--artist`);
};

export const gameGenre = (level) => {
  const gameGenreTemplate = `
    ${getGameHeader(gameHeaderData)}
    <section class="game__screen">
      <h2 class="game__title">${level.question}</h2>
      <form class="game__tracks">
      
        ${new Array([...level.answers].length).fill(`
        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>`).join(``)}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  `;

  return createNodefromTemplate(gameGenreTemplate, `section`, `game game--genre`);
};


