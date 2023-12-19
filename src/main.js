import "./style.css";

const gameItems = [
	{ id: "paper", image: "fa-solid fa-hand", style: "paper-item" },
	{
		id: "scissors",
		image: "fa-solid fa-hand-scissors",
		style: "scissors-item",
	},
	{ id: "rock", image: "fa-solid fa-hand-back-fist", style: "rock-item" },
];

const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".modal-rules-box");
const closeModalBtn = document.querySelector(".close-modal-btn");
const body = document.querySelector("body");
const rpsItems = document.querySelectorAll(".game-item");
const fightGameBox = document.querySelector(".fight-game-box");
const gameItemsBox = document.querySelector(".game-items-box");
const userItemSelect = document.querySelector(".user-choice");

const showModal = () => {
	rulesModal.classList.add("active");
	body.classList.add("modal-open");
};

const closeModal = () => {
	rulesModal.classList.remove("active");
	body.classList.remove("modal-open");
};

const userChoice = (e) => {
	let selectedItem = e.target.dataset.id;
	gameItemsBox.classList.add("hide-gime-items");
	fightGameBox.classList.add("show-fight-game-box");
	for (let i = 0; i < gameItems.length; i++) {
		if (gameItems[i].id === selectedItem) {
			userItemSelect.innerHTML = `		<div class="fight-game-item ${gameItems[i].style}" id="${gameItems[i].id}">
            <div class="fight-image-container">
                <p class="fight-game-image"><i class="${gameItems[i].image}"></i></p>
            </div>
        </div>`;
		}
	}

	console.log(selectedItem);
};

rulesBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
rpsItems.forEach((item) => item.addEventListener("click", userChoice));
