
$(window).on("load", function (){
    $(".preloader").fadeOut(500);
});
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let y1 = null;
let y2 = null;

function handleTouchStart(event){
    const firstTouch = event.touches[0];
    y1 = firstTouch.clientY;
    console.log(y1);
    console.log("__1___");
}
function handleTouchMove(event){
    y2 = event.touches[0].clientY;
    let yDiff = Math.trunc(y1 - y2) + 'px';
    let c = 0;
    let el = document.getElementsByClassName("mob-el")[c];
    let a = getComputedStyle(el,null).getPropertyValue("top");
    console.log("a = " + a);
    console.log("yDiff = " + yDiff);
    console.log("_____");

    if (a > 0){
        el.style.top = "calc(" + a + " - " + yDiff/2 + "px)";
        console.log(el.style.top);
        y1 = event.touches[0].clientY;
        console.log("__4___");
    }
    else {
        c += 1;
    }

}

$(document).ready(function() {
    setInterval(window.onload = function(){
        let way1 = document.getElementById("way1-1");
        let way2 = document.getElementById("way2-1");
        way1.addEventListener("mouseover", function (event) {
            way1.classList.add('active-way')
            way2.classList.remove('active-way');
        }, false);
        way2.addEventListener("mouseover", function (event) {
            way2.classList.add('active-way')
            way1.classList.remove('active-way');
        }, false);
    });
});
$(document).ready(function() {
    setInterval(window.onload = function(){
        let way1 = document.getElementById("way1");
        let way2 = document.getElementById("way2");
        way1.addEventListener("mouseover", function (event) {
            way1.classList.add('active-way-1')
            way2.classList.remove('active-way-1');
        }, false);
        way2.addEventListener("mouseover", function (event) {
            way2.classList.add('active-way-1')
            way1.classList.remove('active-way-1');
        }, false);
    });
});
var checkMenu = true;
var scroll = true;

var slideIndex = [1,1];
var slideId = ["active1", "active2"]


function slides(n, p, r, m) {
    if (r === 1){
        leftSlides(slideIndex[p] += n, p, m);
    }
    if (r === 2){
        rightSlides(slideIndex[p] += n, p, m);
    }
}
function leftSlides(n, p, m) {
    var i;
    var a;
    var x = document.getElementsByClassName(slideId[p]);
    var y = document.getElementsByClassName(slideId[m]);
    for (i = 0; i < x.length; i++) {
        x[i].className = "active1 out";
        y[i].className = "active2";
    }
    if (1 < n < (x.length+1)) {a = 1;}
    if (n < 1) {slideIndex[p] = x.length; a = 2;}
    if (slideIndex[p] >= 0 && a === 1){
        x[slideIndex[p]-1].className = "active1";
        x[slideIndex[p]].className = "active1 next";
        y[slideIndex[p]-1].className = "active2 text-down";
    }
    if (slideIndex[p] === x.length && a === 2){
        x[slideIndex[p]-1].className = "active1";
        x[0].className = "active1 next";
        y[slideIndex[p]-1].className = "active2 text-down";
    }
}
function rightSlides(n, p, m) {
    var i;
    var a;
    var x = document.getElementsByClassName(slideId[p]);
    var y = document.getElementsByClassName(slideId[m]);
    for (i = 0; i < x.length; i++) {
        x[i].className = "active1 out";
        y[i].className = "active2";
    }
    if (n > x.length) {slideIndex[p] = 1; a = 1;}
    if (0 < n < (x.length+1)) {a = 1;}
    if (slideIndex[p] !== x.length && a === 1){
        x[slideIndex[p]-1].className = "active1";
        x[slideIndex[p]].className = "active1 next";
        y[slideIndex[p]-1].className = "active2 text-down";
    }
    if (slideIndex[p] === x.length && a === 1){
        x[slideIndex[p]-1].className = "active1";
        x[0].className = "active1 next";
        y[slideIndex[p]-1].className = "active2 text-down";

    }
}

/*
function menuItems(a) {
    var navItems = document.getElementsByClassName("nav-link");
    if (checkMenu) {
        Array.from(navItems).forEach(
            function (element, index, array) {
                element.style.transform = 'translateY(' + a + 'px)';
            }
        )
    } else {
        Array.from(navItems).forEach(
            function (element, index, array) {
                element.style.transform = 'translateY(' + a + 'px)';
                a -= 110;
            }
        );
    }
}*/
function menu(a, b) {
    var nav = document.getElementById("nav-main");
    nav.style.transform = "translateY(" + a + b + ")";
}
function menuStrip(a){
    var strip = document.getElementById("white-back");
    strip.style.transform = "translateX(" + a + "vw)";
}
function checkColor(a){
    var logo = document.getElementById("logo");
    var menuBtn = document.getElementById("menu-btn");
    if (scroll){
        logo.style.filter = "invert(" + a + ")";
        menuBtn.style.filter = "invert(" + a + ")";
    }
}
function menuStrips() {
    if (checkMenu) {
        menuStrip(0);
        checkColor(1);
        setTimeout(function(){
            menu(16, "vw");
        }, 200);
        checkMenu = false;
    }
    else {
        menu(-100, "%");
        setTimeout(function(){
            menuStrip(-100);
        }, 400);
        setTimeout(function(){
            checkColor(0);
        }, 400);
        checkMenu = true;
    }
}
