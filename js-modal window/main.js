const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal1');

const closeBtn = document.getElementById('.modal__close');

btn.onclick = () => {
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click", closeModal);


    function closeModal() {
        modal.classList.remove("modal_active");
        closeBtn.removeEventListener("click",
        closeModal);
    }
};