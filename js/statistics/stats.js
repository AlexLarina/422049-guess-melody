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

const countPoints = (answers) => {
  if (answers.length < 10) {
    return -1;
  }
  let points = 0;
  answers.forEach(function (answer) {
    if (!answer.correctAnswer) {
      points -= 2;
    } else {
      points += (answer.time < 30) ? 2 : 1;
    }
  });
  return points;
};

const TimeMissedResult = {
  points: 10,
  remainNotes: 5,
  remainTime: 0 // времени не осталось
};

const LifeMissedResult = {
  points: 10,
  remainNotes: 0, // жизней не осталось
  remainTime: 3
};

const ThirdPlaceResult = {
  points: 10,
  remainNotes: 5,
  remainTime: 5 // времени не осталось
};

const allPlayersResults = [4, 6, 8, 11];

const showGameResult = (playersResultsArray, individualResult) => {
  let message = ``;
  let sortedResultArray = [];
  if (individualResult.remainTime === 0) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (individualResult.remainNotes === 0) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (individualResult.points) {
    playersResultsArray.push(individualResult.points);
    sortedResultArray = playersResultsArray.sort((a, b) => {
      return a - b;
    });
    const playerResultIndex = sortedResultArray.indexOf(individualResult.points);
    message = `Вы заняли ` + playerResultIndex + ` место из `
      + sortedResultArray.length + ` игроков. Это лучше, чем у `
      + playerResultIndex * 100 / sortedResultArray.length + `% игроков.`;
  }
  return message;
};

export {countPoints, showGameResult, LackOfAnswers, SlowAnswers, TimeMissedResult,
  ThirdPlaceResult, LifeMissedResult, allPlayersResults};
