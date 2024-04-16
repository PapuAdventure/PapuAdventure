// IMAGE CAROUSEL
let index = 1;
showslide(index);

function plusSlide(n) {
  showslide((index += n));
}

function currentSlide(n) {
  showslide((index = n));
}

function showslide(n) {
  let i;
  let slide = document.getElementsByClassName("image-carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slide.length) {
    index = 1;
  }
  if (n < 1) {
    index = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}

setInterval(function() {
  plusSlide(1);
}, 3000);

