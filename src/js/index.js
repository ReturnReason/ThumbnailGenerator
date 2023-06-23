import { $ } from '../utils/getElem.js';
import { genRandomColor } from '../utils/generateColor.js';

const $thumbnail = $('.thumbnail');

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

const changeBgColor = () => {
  const $bgBtn = $('.change-bg-color-btn');

  $bgBtn.addEventListener('click', () => {
    $thumbnail.style.background = `#${genRandomColor()}`;
  });
};

const changeBgGradientColor = () => {
  const $gbgBtn = $('.change-bg-g-color-btn');

  $gbgBtn.addEventListener('click', () => {
    $thumbnail.style.background = `linear-gradient(180deg, #${genRandomColor()}, #${genRandomColor()})`;
  });
};

const changeHandler = () => {
  changeTitleText();
  changeContentText();
  changeBgColor();
  changeBgGradientColor();
};

const downloadThumbnailImage = () => {
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

const uploadImage = () => {
  const $uploadImgBtn = $('#upload-img');

  $uploadImgBtn.addEventListener('change', ({ target }) => {
    const file = target.files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = ({ target }) => {
        const imgUrl = target.result;
        const thumbImg = document.querySelector('.thumbnail');
        thumbImg.style.background = `url(${imgUrl}) no-repeat center`;
        thumbImg.style.backgroundSize = `cover`;
      };

      fileReader.readAsDataURL(file);
    }
  });
};

const init = () => {
  changeHandler();
  uploadImage();
  createThumbnail();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
