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
var checkMenu = true

function menuItems(){
    var navItems = document.getElementsByClassName("nav-link");
    if (checkMenu){
    Array.from(navItems).forEach(
        function(element, index, array  ) {
            element.style.transform = 'translateY(0px)';
            checkMenu = false;
        }
    )
    }
    else {
        var a = 0;
        Array.from(navItems).forEach(
            function(element, index, array  ) {
                element.style.transform = 'translateY(' + a + 'px)';
                a -= 65;
            }
        );
        checkMenu = true;
    }
}
function menuStrips() {
    var nav = document.getElementById("nav-main");
    if (checkMenu) {
        nav.style.transform = "translateX(110px)";
        setTimeout(() => {
            menuItems();
        }, 200);
    }
    else {
        menuItems();
        setTimeout(() => {
            nav.style.transform = "translateX(-84px)";
        }, 200);
    }
}

/*
window.onscroll = function(ev) {
    var navmain = document.getElementById("myHeader");
    if (window.scrollY > 30) {
            navmain.style.height = "10%";
    }
    else{
        navmain.style.height = "15%";
    }
}
*/

/*
function changeNavColor(a, b, c, d, e){
    Array.from(a).forEach(
        function(element, index, array  ) {
            element.style.color="b"
            e.style.height = "c";
        }
    );
    Array.from(d).forEach(
        function(element, index, array  ) {
            element.style.fill="white";
        }
    );
}
window.onscroll = function(ev) {
    var nav = document.getElementsByClassName("nav-link");
    var el1 = document.getElementById("sec-one");
    var el2 = document.getElementById("sec-two");
    var el3 = document.getElementById("sec-three");
    var el4 = document.getElementById("sec-four");
    var el5 = document.getElementById("sec-five");
    var navmain = document.getElementById("myHeader");
    var logo = document.getElementsByClassName("col-chng");

    if (window.scrollY >= el1.offsetTop) {
        Array.from(nav).forEach(
            function(element, index, array  ) {
                element.style.color="white"
                navmain.style.height = "15%";
            }
        );
        Array.from(logo).forEach(
            function(element, index, array  ) {
                element.style.fill="white";
            }
        );
    }
    if (window.scrollY >= el2.offsetTop) {
        Array.from(nav).forEach(
            function(element, index, array  ) {
                element.style.color="#b87709";
                navmain.style.height = "10%";
            }
        );
        Array.from(logo).forEach(
            function(element, index, array  ) {
                element.style.fill="#b87709";
            }
        );
    }
    if (window.scrollY >= el3.offsetTop) {
        Array.from(nav).forEach(
            function(element, index, array  ) {
                element.style.color="white";
                navmain.style.height = "10%";
            }
        );
        Array.from(logo).forEach(
            function(element, index, array  ) {
                element.style.fill="white";
            }
        );
    }
    if (window.scrollY >= el4.offsetTop) {
        Array.from(nav).forEach(
            function(element, index, array  ) {
                element.style.color="#b87709";
                navmain.style.height = "10%";
            }
        );
        Array.from(logo).forEach(
            function(element, index, array  ) {
                element.style.fill="#b87709";
            }
        );
    }
    if (window.scrollY >= el5.offsetTop) {
        Array.from(nav).forEach(
            function(element, index, array  ) {
                element.style.color="#b87709";
                navmain.style.height = "10%";
            }
        );
        Array.from(logo).forEach(
            function(element, index, array  ) {
                element.style.fill="#b87709";
            }
        );
    }

};
*/
