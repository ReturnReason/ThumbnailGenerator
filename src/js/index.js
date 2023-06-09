import { $ } from '../utils/getElem.js';

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

  return colorCode.join('');
};

export const genRandomGradientColor = () => {
  return genRandomColor();
};

const changeBgColor = () => {
  const $thumbnail = $('.thumbnail');
  const $bgBtn = $('.change-bg-color-btn');

  $bgBtn.addEventListener('click', () => {
    $thumbnail.style.backgroundColor = `#${genRandomColor()}`;
  });
};

const changeBgGradientColor = () => {
  const $thumbnail = $('.thumbnail');
  const $gbgBtn = $('.change-bg-g-color-btn');

  $gbgBtn.addEventListener('click', () => {
    $thumbnail.style.background = `linear-gradient(180deg, #${genRandomGradientColor()}, #${genRandomGradientColor()})`;
  });
};

const downloadThumbnailImage = () => {
  const $thumbnail = $('.thumbnail');

  html2canvas($thumbnail).then((canvas) => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    link.href = image;
    link.download = 'thumbnail.png';
    link.click();
  });
};

const createThumbnail = () => {
  const $createBtn = $('.create-btn');

  $createBtn.addEventListener('click', () => {
    downloadThumbnailImage();
  });
};

const init = () => {
  changeTitleText();
  changeContentText();
  changeBgColor();
  changeBgGradientColor();
  createThumbnail();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
