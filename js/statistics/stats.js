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

export {countPoints, showGameResult};
