const img = document.querySelector 
('.slider__image');

const imgArr = ["/JS - slider/img/1.jpg", "/JS - slider/img/2.jpg","/JS - slider/img/3.jpg"];

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    }   else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }

    img.src = imgArr[currentIndex];
}