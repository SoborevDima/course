const btns = document.querySelectorAll(".filter-btns__item");

const images = document.querySelectorAll(".filter-content img");

for (let btn of btns) {
    btn.onclick = function() {
        filterImage(this.dataset.filter);
    };
}

function filterImage(sel) {
    for (let img of images) {
        if (!img.classList.contains(sel)) {
            img.style.display = "none";
        }   else {
            mg.style.display = "block";
        }
    }
}