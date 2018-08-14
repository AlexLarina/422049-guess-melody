'use strict';

const LEFT_ARROW_CODE = 13; // enter
const RIGHT_ARROW_CODE = 27; // esc
const mainScreen = document.querySelector(`.main`);
const app = document.querySelector(`.app`);

// const screensTemplates = document.querySelectorAll(`template`);
const screensTemplates = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let currentScreenNumber = 0;

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen.cloneNode(true));
  // mainScreen.appendChild(screensTemplates[screenIndex].content);
};

const slideLeft = () => {
  currentScreenNumber--;
  currentScreenNumber = (currentScreenNumber < 0) ? 0 : currentScreenNumber;
  showScreen(screensTemplates[currentScreenNumber]);
};

const slideRight = () => {
  currentScreenNumber++;
  currentScreenNumber = (currentScreenNumber > screensTemplates.length - 1) ? screensTemplates.length - 1 : currentScreenNumber;
  showScreen(screensTemplates[currentScreenNumber]);
};

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === LEFT_ARROW_CODE) {
    slideLeft();
  } else if (evt.keyCode === RIGHT_ARROW_CODE) {
    slideRight();
  }
});

const arrowsContainer = document.createElement(`div`);
arrowsContainer.className = `arrows__wrap`;
arrowsContainer.style.position = `absolute`;
arrowsContainer.style.top = `135px`;
arrowsContainer.style.left = `50%`;
arrowsContainer.style.marginLeft = `-56px`;

const createButton = (content, extraClass) => {
  const buttonElement = document.createElement(`button`);
  buttonElement.textContent = content;
  buttonElement.className = `arrows__btn ` + extraClass;
  buttonElement.style.background = `none`;
  buttonElement.style.border = `2px solid black`;
  buttonElement.style.padding = `5px 20px`;

  return buttonElement;
};

arrowsContainer.appendChild(createButton(`<-`, `leftButton`));
arrowsContainer.appendChild(createButton(`->`, `rightButton`));
app.appendChild(arrowsContainer);

const leftArrowButton = document.querySelector(`.leftButton`);
const rightArrowButton = document.querySelector(`.rightButton`);

leftArrowButton.addEventListener(`click`, () => {
  slideLeft();
});

rightArrowButton.addEventListener(`click`, () => {
  slideRight();
});

showScreen(screensTemplates[currentScreenNumber]);
