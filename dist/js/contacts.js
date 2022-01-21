window.addEventListener('load', function () {
  var maps = document.querySelectorAll('.map-container .map');
  for(var i=0; i<maps.length;i++){
    maps[i].addEventListener('click', function(){
      if(!this.hasChildNodes()){
        var iframe = document.createElement('iframe');
        iframe.src = "https://yandex.ru/map-widget/v1/?ll=" + this.dataset.y + "%2C" + this.dataset.x + "&z=16";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.setAttribute('allowfullscreen', true);
        iframe.setAttribute("loading", "lazy");
        this.append(iframe);
      }
    })
  }
})