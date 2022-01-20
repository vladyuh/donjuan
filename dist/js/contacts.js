window.addEventListener('load', function () {
  var scripts = document.createElement('script');
  scripts.src = "https://api-maps.yandex.ru/2.1/?apikey=17fcb403-dca9-44b3-87ea-497e17b51d13&lang=ru_RU";
  scripts.type = "text/javascript";
  document.body.appendChild(scripts);
  scripts.onload = initMaps;
})

function initMaps() {
  var maps = document.querySelectorAll('.map-container .map');
  ymaps.ready(init);
  function init() {
      for (var i = 0; i < maps.length; i++) {
          var myMap = new ymaps.Map(maps[i].getAttribute('id'), {
              center: [maps[i].dataset.x, maps[i].dataset.y],
              controls: [],
              zoom: 16
          });
      }
  }
}