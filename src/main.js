import "./style.css";

const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".modal-rules-box");
const closeModalBtn = document.querySelector(".close-modal-btn");
const body = document.querySelector('body')

const showModal = () => {
	rulesModal.classList.add("active");
    body.classList.add('modal-open')
};

const closeModal = () => {
    rulesModal.classList.remove('active')
    body.classList.remove('modal-open')
}

rulesBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
