import "./style.css";

const gameItems = [
	{ id: "paper", image: "fa-solid fa-hand" },
	{ id: "scissors", image: "fa-solid fa-hand-scissors" },
	{ id: "rock", image: "fa-solid fa-hand-back-fist" },
];

const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".modal-rules-box");
const closeModalBtn = document.querySelector(".close-modal-btn");
const body = document.querySelector("body");

const showModal = () => {
	rulesModal.classList.add("active");
	body.classList.add("modal-open");
};

const closeModal = () => {
	rulesModal.classList.remove("active");
	body.classList.remove("modal-open");
};

rulesBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
