const countPoints = (answers) => {
  if (answers.length < 10) {
    return -1;
  }
  let points = answers.reduce((sum, current) => {
    if (!current.correctAnswer) {
      return sum - 2;
    }
    return sum + ((current.time < 30) ? 2 : 1);
  }, 0);
  return points;
};

const showGameResult = (playersResultsArray, individualResult) => {
  if (individualResult.remainTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (individualResult.remainNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  playersResultsArray.push(individualResult.points);
  let sortedResultArray = playersResultsArray.sort((a, b) => {
    return a - b;
  });
  const playerResultIndex = sortedResultArray.indexOf(individualResult.points);
  return `Вы заняли ` + playerResultIndex + ` место из `
      + sortedResultArray.length + ` игроков. Это лучше, чем у `
      + playerResultIndex * 100 / sortedResultArray.length + `% игроков.`;
};

const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

const countLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Number of lives should be of type number`);
  }

  if (lives < 0) {
    throw new Error(`Number of lives should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};

const countTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    time
  });
  return newGame;
};

export {countPoints, showGameResult, changeLevel, countLives, countTime};
