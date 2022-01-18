//Remove animations on load
window.onload = function() {
    document.querySelector('body').classList.remove('perf-no-animation');
}

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu init
function mobileMenu() {
    var toggle = document.querySelector('.header-burger .burger');
    var menu = document.querySelector('.mobileMenu');
    var body = document.querySelector('body');

    this.onOpen = function () {
        toggle.classList.add('open');
        menu.classList.add('opened');
        body.classList.add('mobile');
        return true;
    };

    this.onClose = function () {
        toggle.classList.remove('open');
        menu.classList.remove('opened');
        body.classList.remove('mobile');
    }
}

var mobileMenu = new mobileMenu();

document.querySelector('.header-burger .burger').addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.onOpen();
});

document.querySelector('.mobileMenu-header__toggle .burger').addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.onClose();
});

var navLinks = document.querySelectorAll('.mobileMenu-nav__ul li a');
for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click', function(){
        mobileMenu.onClose();
    });
}

//Browser-level image lazy-loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    for(var i = 0; i < images.length; i++){
        images[i].src = images[i].dataset.src;
    }
}