import {assert} from 'chai';
import {countPoints, showGameResult, LackOfAnswers, SlowAnswers, TimeMissedResult,
  LifeMissedResult, ThirdPlaceResult, allPlayersResults} from "./stats";

describe(`Player's points count`, () => {
  it(`Player answered less than 10 questions`, () => {
    assert.equal(countPoints(LackOfAnswers), -1);
  });
  it(`Player answered all 10 correctly but slowly`, () => {
    assert.equal(countPoints(SlowAnswers), 10);
  });
});

describe(`Show player's game result`, () => {
  it(`Player lost a game due to time limit:`, () =>{
    assert.equal(showGameResult(allPlayersResults, TimeMissedResult),
        `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`Player lost a game due to lives limit:`, () =>{
    assert.equal(showGameResult(allPlayersResults, LifeMissedResult),
        `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`Player got 3rd place among 5 players. Result better than 60% of players:`, () =>{
    assert.equal(showGameResult(allPlayersResults, ThirdPlaceResult),
        `Вы заняли 3 место из 5 игроков. Это лучше, чем у 60% игроков.`);
  });
});
