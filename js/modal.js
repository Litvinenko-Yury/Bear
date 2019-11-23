var popup = document.querySelector(".modal__content");
var modalOverlay = document.querySelector(".modal__overlay");
var btnModalClose = document.querySelector(".btn-modal-close");

document.onclick = function (event) { /*1. вешаем единый обработчик на элемент document*/
  /*это нужно для того, что-бы много .btn-modal-open можно было ставить в любом месте*/
  var target = event.target; /*2. где был клик?*/

  while (target != document) {
    if (target.classList.contains("btn-modal-open")) { /* 3. на .btn-modal-open? то, что надо!*/

      /*события по кнопке ".btn-modal-open"*/
      popup.classList.add("modal__content--show");
      modalOverlay.classList.add("modal__overlay--show");

      break;
    } else {/* 4. не на .btn-modal-open? нет, не подходит... */
      console.log("промазал");
      target = target.parentNode; /*5. поднимаем target на уровень вверх по иерархии родителей от event.target и выше*/
    }
  };
};

/* 6. Если клик был мимо .btn-modal-open, цикл дойдет вверх до document, и обработчик закончит работу*/

/*2-Закрыть модальное окно:*/
/*события по клику на затененный фон*/
modalOverlay.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__content--show");
  modalOverlay.classList.remove("modal__overlay--show");
});

/*3-Закрыть модальное окно:*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
      modalOverlay.classList.remove("modal__overlay--show");
    }
  }
});
