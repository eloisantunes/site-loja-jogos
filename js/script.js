
var carouselInner = 2;
showSlides(carouselInner);

function plusSlides(n) {
    showSlides(carouselInner += n);
}

function currentSlide(n) {
    showSlides(carouselInner = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementById("carouselIndicators");
    var dots = document.getElementByClassName("carousel-inner");

    if (n > slides.length) {carouselInner=1}
    if (n < 1) {carouselInner = slides.length}
    for (1=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace("active", "");
    }
    slides[carouselInner -1].style.display = "block";
    dots[carouselInner -1].className += "active";
} 

$('.carousel').carousel({
    interval: 2000
  }) 
