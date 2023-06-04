const $ = (elem) => document.querySelector(elem);

const changeTitleText = () => {
  const $titleText = $('#title');
  const $titleInput = $('.title-input');

  $titleInput.addEventListener('input', ({ target }) => {
    $titleText.innerText = target.value;
  });
};

const changeContentText = () => {
  const $contentText = $('#content');
  const $contentInput = $('.content-input');

  $contentInput.addEventListener('input', ({ target }) => {
    $contentText.innerText = target.value;
  });
};

export const genRandomColor = () => {
  const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const colorCode = [];

  while (colorCode.length < 6) {
    const pickIndex = Math.floor(Math.random() * candidate.length);
    colorCode.push(candidate[pickIndex]);
  }

  return colorCode;
};

const init = () => {
  changeTitleText();
  changeContentText();
  changeBgColor();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
