import {changeScreen, createNodefromTemplate} from "./util.js";
import {gameGenreScreen} from "./game-genre.js";
import {welcomeData} from "./data";

export const renderWelcomeScreen = (data) => {
  const welcomeTemplate = `
  <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
  <h2 class="welcome__rules-title">${data.gameTitle}</h2>
  <p class="welcome__text">${data.gameHint}</p>
  <ul class="welcome__rules-list">
    <li>${data.gameRules[0]}</li>
    <li>${data.gameRules[1]}</li>
  </ul>
  <p class="welcome__text">${data.gameGreeting}</p>`;

  const welcomeButton = welcomeTemplate.querySelector(`.welcome__button`);
  welcomeButton.addEventListener(`click`, () => {
    changeScreen(gameGenreScreen);
  });
  return createNodefromTemplate(welcomeTemplate, `section`, `welcome`);
};

/* renderWelcomeScreen(welcomeData);*/

// export const welcomeScreen = createNodefromTemplate(welcomeScreenTemplate(welcomeData), `section`, `welcome`);
// welcomeScreen.setAttribute(`class`, `welcome`);

/* const welcomeButton = welcomeScreen.querySelector(`.welcome__button`);
welcomeButton.addEventListener(`click`, () => {
  changeScreen(gameGenreScreen);
}); */
