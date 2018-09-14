export const mainElement = document.querySelector(`.main`);

export const render = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container.firstChild;
};

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getRandomElement = (array) => {
  return array[Math.round(Math.random() * array.length)];
};
