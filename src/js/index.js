const $ = (elem) => document.querySelector(elem);

const changeTitleText = () => {
  const $titleText = $('#title');
  const $titleInput = $('.title-input');

  $titleInput.addEventListener('input', ({ target }) => {
    $titleText.innerText = target.value;
  });
};

const init = () => {
  changeTitleText();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
