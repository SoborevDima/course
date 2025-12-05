const img = document.querySelector 
('slider__image');

const imgArr = ['/JS - slider/img/1.jpg, /JS - slider/img/2.jpg, /JS - slider/img/3.jpg']

let currentIndex = 0;

function slide(document) {
    currentIndex += direction;

    img.scr = imgArr[currentIndex];
}