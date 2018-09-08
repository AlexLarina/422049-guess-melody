import {changeScreen, createNodefromTemplate} from './util.js';
import {gameArtistScreen} from "./game-artist";
import {levels, gameHeaderData} from "./data";

const gameGenreScreenTemplate = (level) => `<header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">${gameHeaderData.titleHint}</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">${gameHeaderData.minutes}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${gameHeaderData.seconds}</span>
      </div>

      <div class="game__mistakes">
      ${new Array(gameHeaderData.mistakes).fill(`<div class="wrong"></div>`).join(``)};
        <!--<div class="wrong"></div>
        <div class="wrong"></div>
        <div class="wrong"></div>-->
      </div>
    </header>
    <section class="game__screen">
      <h2 class="game__title">${level.question}</h2>
      <form class="game__tracks">
      
        ${new Array([...level.answers].length).fill(`<div class="track">
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
    </section>`;

export const gameGenreScreen = createNodefromTemplate(gameGenreScreenTemplate(levels[0]));
gameGenreScreen.setAttribute(`class`, `game game--genre`);

const answerButton = gameGenreScreen.querySelector(`.game__submit`);
answerButton.setAttribute(`disabled`, `disabled`);

const gameInputs = gameGenreScreen.querySelectorAll(`.game__input`);

gameInputs.forEach(function (input) {
  input.addEventListener(`click`, () => {
    input.setAttribute(`checked`, `checked`);
    answerButton.removeAttribute(`disabled`);
  });
});

answerButton.addEventListener(`click`, () => {
  changeScreen(gameArtistScreen);
});
