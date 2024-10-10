document.addEventListener('DOMContentLoaded', function () {
    const icon= document.getElementById('hide');
    const htopnav = document.getElementById('htopnav');

    icon.addEventListener("click", function () {
        htopnav.classList.toggle('visible');
    }); 
});

document.querySelector("#hide").addEventListener("click", animateBars);

var line1= document.querySelector(".line1__bars-menu");
var line2= document.querySelector(".line2__bars-menu");
var line3= document.querySelector(".line3__bars-menu");

function animateBars() {
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
}