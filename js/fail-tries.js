import {changeScreen, createNodefromTemplate} from './util.js';
import {welcomeScreen} from "./welcome";
import {resultState} from "./data";

const failTriesScreenTemplate = `
<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${resultState.failTries.title}</h2>
    <p class="result__total result__total--fail">${resultState.failTries.total}</p>
    <button class="result__replay" type="button">${resultState.failTries.buttonHint}</button>`;

export const failTriesScreen = createNodefromTemplate(failTriesScreenTemplate);
failTriesScreen.setAttribute(`class`, `result`);

const replayButton = failTriesScreen.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});
