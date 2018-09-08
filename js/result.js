import {createNodefromTemplate} from "./util";

const resultExampleObject = {
  time: 100,
  levelsPassed: 2,
  mistakes: 0
};

const renderResult = (resultObject) => {
  const measureTimePerQuestion = 40; // 40s to answer question
  let resultScreenTemplate = ``;
  if (resultObject.levelsPassed * measureTimePerQuestion > 400) {
    resultScreenTemplate = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;
  } else if (resultObject.mistakes > 3) {
    resultScreenTemplate = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;
  } else {
    resultScreenTemplate = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8быстрых), совершив ${resultObject.mistakes} ошибки</p>
    <p class="result__text">Вы заняли 2 место из 10.Это лучше чем у 80% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>`;
  }
  return createNodefromTemplate(resultScreenTemplate, `section`, `result`);
};

renderResult(resultExampleObject);

