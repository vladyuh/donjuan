var video = document.querySelectorAll('.about-video');
if (video.length != 0) {
    video[0].addEventListener('click', function () {
        const videoId = this.getAttribute('data-id');
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0";
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('width', "100%");
        iframe.setAttribute('height', "100%");
        iframe.setAttribute('frameborder', "0");
        this.append(iframe);
        this.classList.add('play');
    });
}