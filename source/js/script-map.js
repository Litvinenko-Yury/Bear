ymaps.ready(init);
var myMap;
var myPlacemark;
var $zoom;
var $center;
var $iconImage;
var $iconImageSize;
var $iconImageOffset;
var $width = window.innerWidth;

//задание масштаба для mob/tab/desk
if ($width < 1150) {
  $zoom = 17;
} else {
  $zoom = 16;
}

//задание центра карты для mob/tab/desk
$center = [59.938631, 30.323055];

//задание изображения маркера для mob/tab/desk
$iconImage = "img/vector/icon-map-pin.svg";

//задание размеров маркера для mob/tab/desk
$iconImageSize = [67, 100];

//задание смещения иконки маркера для mob/tab/desk
$iconImageOffset = [-25, -125];

//=========================
// Создание экземпляра карты и его привязка к контейнеру с заданным id ("map").
function init() {
  myMap = new ymaps.Map("map", {
    center: $center,
    zoom: $zoom,
    controls: []
  }, {
    // Скрыть "Как добраться"/"открыть в Яндекс картах".
    suppressMapOpenBlock: true
  });

  // Создание метки
  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'Магазин Мишка',
    balloonContent: 'Магазин Мишка - вязанные сувенира ручной работы',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",

    // Своё изображение иконки метки.
    iconImageHref: $iconImage,

    // Размеры метки.
    iconImageSize: $iconImageSize,

    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    //iconImageOffset: [-25, -55]
    iconImageOffset: $iconImageOffset
  });

  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);
}
