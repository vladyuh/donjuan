var toggles = document.querySelectorAll('.tickets-toggles .toggle');
for(var i = 0; i< toggles.length; i++){
  toggles[i].addEventListener('click', function(){    
    var city = this.dataset.city;
    var cities = document.querySelectorAll('.tickets-cities__item[data-city="'+ this.dataset.city + '"]');
    var otherCities = document.querySelectorAll('.tickets-cities__item');

    if(city != "all"){
      otherCities.forEach(function(element){
        element.style.display = "none";
      });
      cities.forEach(function(element){
        element.style.display = "flex";
      });
    }
    else{
      otherCities.forEach(function(element){
        element.style.display = "flex";
      });
    }
    
    toggles.forEach(function(element){
      element.classList.remove('is-active');
    })

    this.classList.add('is-active');
    
  })
}