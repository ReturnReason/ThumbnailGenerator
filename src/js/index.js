const $ = (elem) => document.querySelector(elem);

const init = () => {
  const $titleText = $('#title');
  const $titleInput = $('.title-input');

  $titleInput.addEventListener('input', ({ target }) => {
    $titleText.innerText = target.value;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
