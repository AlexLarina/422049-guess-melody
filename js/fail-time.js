import {changeScreen, createNodefromTemplate} from './util.js';
import {welcomeScreen} from "./welcome";


const failTimeScreenTemplate = `
<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;

export const failTimeScreen = createNodefromTemplate(failTimeScreenTemplate);
failTimeScreen.setAttribute(`class`, `result`);

const replayButton = failTimeScreen.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});
