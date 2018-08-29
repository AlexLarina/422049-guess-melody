import {assert} from 'chai';
import {countPoints, showGameResult, changeLevel, countLives, countTime} from "./stats";

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

const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 2,
  time: 0
});

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

describe(`Check level changer`, () => {

  it(`should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(changeLevel(INITIAL_GAME, 102).level, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
  });

});

describe(`Check lives manager`, () => {

  it(`should update level of the game`, () => {
    assert.equal(countLives(INITIAL_GAME, 1).lives, 1);
    assert.equal(countLives(INITIAL_GAME, 102).lives, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => countLives(INITIAL_GAME, -10).lives, /Number of lives should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => countLives(INITIAL_GAME, []).lives, /Number of lives should be of type number/);
  });

});

describe(`Check time count`, () => {

  it(`should update level of the game`, () => {
    assert.equal(countTime(INITIAL_GAME, 1).time, 1);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => countTime(INITIAL_GAME, -10).time, /Time should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => countTime(INITIAL_GAME, []).time, /Time should be of type number/);
  });

});
