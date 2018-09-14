export const countPoints = (answers) => {
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
