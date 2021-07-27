

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const slider= document.querySelector('#main-2');

var scrollToHere = slider.offsetTop;

$('.link').on('click', function() {
    bodyScrollBar.scrollTo(0, scrollToHere, 1000);
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var logo = document.getElementsByClassName("logo-img")[0];
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.classList.add("logo-img-small");
    } else {
        header.classList.remove("sticky");
        logo.classList.remove("logo-img-small");
    }
}

AOS.init({
    duration: 1200,
})