'use strict';

const LEFT_ARROW_CODE = 13;
const RIGHT_ARROW_CODE = 27;
const mainScreen = document.querySelector(`.main`);
const app = document.querySelector(`.app`);

const screensTemplates = document.querySelectorAll(`template`);
let currentScreenNumber = 0;
const showScreen = function (screenIndex) {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screensTemplates[screenIndex].content);
};
const slideLeft = function () {
  currentScreenNumber < 0 ? currentScreenNumber = 0 : currentScreenNumber--;
  showScreen(currentScreenNumber);
}

showScreen(currentScreenNumber);

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === LEFT_ARROW_CODE) {
    /* currentScreenNumber < 0 ? currentScreenNumber = 0 : currentScreenNumber--;
    showScreen(currentScreenNumber); */
    slideLeft();
  } else if (evt.keyCode === RIGHT_ARROW_CODE) {
    currentScreenNumber > screensTemplates.length - 1 ?
    currentScreenNumber = screensTemplates.length - 1 : currentScreenNumber++;
    showScreen(currentScreenNumber);
  }
});

const arrowsContainer = document.createElement(`div`);
arrowsContainer.className = `arrows__wrap`;
arrowsContainer.style.position = `absolute`;
arrowsContainer.style.top = `135px`;
arrowsContainer.style.left = `50%`;
arrowsContainer.style.marginLeft = `-56px`;

function createButton(content, extraClass) {
  const buttonElement = document.createElement(`button`);
  buttonElement.textContent = content;
  buttonElement.className = `arrows__btn ` + extraClass;
  buttonElement.style.background = `none`;
  buttonElement.style.border = `2px solid black`;
  buttonElement.style.padding = `5px 20px`;

  return buttonElement;
}

arrowsContainer.appendChild(createButton(`<-`, `leftButton`));
arrowsContainer.appendChild(createButton(`->`, `rightButton`));
app.appendChild(arrowsContainer);

const leftArrowButton = document.querySelector(`.leftButton`);
const rightArrowButton = document.querySelector(`.rightButton`);

leftArrowButton.addEventListener(`click`, function () {
  currentScreenNumber < 0 ? currentScreenNumber = 0 : currentScreenNumber--;
  showScreen(currentScreenNumber);
});

rightArrowButton.addEventListener(`click`, function () {
  currentScreenNumber > screensTemplates.length - 1 ?
  currentScreenNumber = screensTemplates.length - 1 : currentScreenNumber++;
})
