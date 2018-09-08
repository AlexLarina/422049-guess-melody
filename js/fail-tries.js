import {changeScreen, createNodefromTemplate} from './util.js';
import {welcomeScreen} from "./welcome";

const failTriesScreenTemplate = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;

export const failTriesScreen = createNodefromTemplate(failTriesScreenTemplate);
failTriesScreen.setAttribute(`class`, `result`);

const replayButton = failTriesScreen.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});
