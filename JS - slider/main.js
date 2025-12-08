const img = document.querySelector 
('slider__image');

const imgArr = ['/JS - slider/img/1.jpg, /JS - slider/img/2.jpg, /JS - slider/img/3.jpg']

let currentIndex = 0;
const imgElem: HTMLElement = document.getElementByID(elementid"img");
imgElem.src = imgArr[currentIndex]

function nextSlide():void {
    if (currentIndex < imgArr.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }


    imgElem.src = imgArr[currentIndex]
}

function prevSlide():void {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imgArr.length - 1;
    }


    imgElem.src = imgArr[currentIndex]
}


function slide(document) {
    currentIndex += direction;

    img.src = imgArr[currentIndex];
}