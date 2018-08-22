export const createNodefromTemplate = (stringTemplate) => {
  const node = document.createElement(`section`);
  node.innerHTML = stringTemplate.trim();
  return node;
};

const mainElement = document.querySelector(`.main`);

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

export const getRandomElement = (array) => {
  return array[Math.round(Math.random() * array.length)];
};
