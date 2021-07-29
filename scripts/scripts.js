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
