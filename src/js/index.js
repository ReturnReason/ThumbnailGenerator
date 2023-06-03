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

const init = () => {
  changeTitleText();
  changeContentText();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
