import {assert} from 'chai';
import {countPoints, showGameResult} from "./stats";

const LackOfAnswers = [
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 31
  }
];

const SlowAnswers = [
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 31
  },
  {
    correctAnswer: true,
    time: 45
  },
  {
    correctAnswer: true,
    time: 44
  },
  {
    correctAnswer: true,
    time: 43
  },
  {
    correctAnswer: true,
    time: 42
  },
  {
    correctAnswer: true,
    time: 41
  },
  {
    correctAnswer: true,
    time: 40
  },
  {
    correctAnswer: true,
    time: 39
  },
  {
    correctAnswer: true,
    time: 38
  }
];

const LifeMissedResult = {
  points: 10,
  remainNotes: 0, // жизней не осталось
  remainTime: 3
};

const TimeMissedResult = {
  points: 10,
  remainNotes: 5,
  remainTime: 0 // времени не осталось
};

const ThirdPlaceResult = {
  points: 10,
  remainNotes: 5,
  remainTime: 5 // времени не осталось
};

const allPlayersResults = [4, 6, 8, 11];

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
