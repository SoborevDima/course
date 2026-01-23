const img = document.querySelector 
('.slider__image');

const dot = document.querySelectorAll
(".slider__dot");

const imgArr = ["/JS - slider/img/1.jpg", "/JS - slider/img/2.jpg","/JS - slider/img/3.jpg"];

let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction) {
        currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    }   else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }

    slide(currentIndex);
}

function slide(index) {
    img.src = imgArr[index];

    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove("active");
}

dots[index].classList.add("active");
}