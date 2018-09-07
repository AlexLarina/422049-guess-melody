/* export const createNodefromTemplate = (stringTemplate) => {
  const node = document.createElement(`section`);
  node.innerHTML = stringTemplate.trim();
  return node;
}; */

export const createNodefromTemplate = (stringTemplate, nodeName, className) => {
  const node = document.createElement(nodeName);
  node.innerHTML = stringTemplate.trim();
  node.classList.add(className);
  return node;
};

const mainElement = document.querySelector(`.main`);

export const getElementFromTemplate = (template) => {
  const container = document.createElement(`section`);
  container.innerHTML = template;
  return container;
};

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getRandomElement = (array) => {
  return array[Math.round(Math.random() * array.length)];
};
