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
  let message = ``;
  let sortedResultArray = [];
  if (individualResult.remainTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (individualResult.remainNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (individualResult.points) {
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

export {countPoints, showGameResult};
