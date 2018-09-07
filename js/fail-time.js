import {changeScreen, createNodefromTemplate} from './util.js';
import {welcomeScreen} from "./welcome";
import {resultState} from "./data";


const failTimeScreenTemplate = `
<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${resultState.failTime.title}</h2>
    <p class="result__total result__total--fail">${resultState.failTime.total}</p>
    <button class="result__replay" type="button">${resultState.failTime.buttonHint}</button>`;

export const failTimeScreen = createNodefromTemplate(failTimeScreenTemplate);
failTimeScreen.setAttribute(`class`, `result`);

const replayButton = failTimeScreen.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});
