var header = document.getElementsByClassName("header_section")[0];
var sticky = header.offsetTop + 150;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})

$('.video_popup').magnificPopup({
    type: 'iframe'
});
