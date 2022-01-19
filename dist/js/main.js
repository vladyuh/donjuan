//Remove animations on load
window.onload = function() {
    document.querySelector('body').classList.remove('perf-no-animation');
}

//fixed header
window.onscroll = function () {
    var header = document.querySelector("header");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu init
function mobileMenu() {
    var toggle = document.querySelector('.header-burger');
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

    this.onToggle = function(){
        toggle.classList.toggle('open');
        menu.classList.toggle('opened');
        body.classList.toggle('mobile');
    }
}

var mobileMenu = new mobileMenu();

document.querySelector('.header-burger').addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.onToggle();
});

var navLinks = document.querySelectorAll('.mobileMenu-nav__ul li a');
for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click', function(){
        mobileMenu.onClose();
    });
}

var video = document.querySelectorAll('.about-video');
if(video.length != 0){
    video[0].addEventListener('click', function(){
        const videoId = this.getAttribute('data-id');
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0";
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('width', "100%");
        iframe.setAttribute('height', "100%");
        this.append(iframe);
        this.classList.add('play');
        
    });
}
