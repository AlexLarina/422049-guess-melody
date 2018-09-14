export const decreaseLives = (user) => {
  const newUser = Object.assign({}, user);
  newUser.lives -= 1;
  return newUser;
};
