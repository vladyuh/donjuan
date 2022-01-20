//Remove animations on load
window.onload = function () {
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

    this.onToggle = function () {
        toggle.classList.toggle('open');
        menu.classList.toggle('opened');
        body.classList.toggle('mobile');
    }
}
var mobileMenu = new mobileMenu();
document.querySelector('.header-burger').addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.onToggle();
});
var navLinks = document.querySelectorAll('.mobileMenu-nav__ul li a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        mobileMenu.onClose();
    });
}
var moreLink = document.querySelectorAll('.actors-list__item .description .more, .team-list__item .description .more');
if (moreLink.length != 0) {
    for (var i = 0; i < moreLink.length; i++) {
        moreLink[i].addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentNode;
            parent.querySelector('.description__text-full').classList.toggle('hidden');
            this.classList.toggle('is-active');
        })
    }
}