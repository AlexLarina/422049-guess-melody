export const decreaseLives = (user) => {
  const newUser = Object.assign({}, user);
  newUser.lives -= 1;
  if (newUser.lives === 0) {
    throw new Error(`You died`);
  }
  return newUser;
};
