import "./style.css";

const gameItems = [
	{ id: "paper", image: "fa-solid fa-hand", style: "paper-item", index: 0 },
	{
		id: "scissors",
		image: "fa-solid fa-hand-scissors",
		style: "scissors-item",
		index: 1,
	},
	{
		id: "rock",
		image: "fa-solid fa-hand-back-fist",
		style: "rock-item",
		index: 2,
	},
];

const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".modal-rules-box");
const closeModalBtn = document.querySelector(".close-modal-btn");
const body = document.querySelector("body");
const rpsItems = document.querySelectorAll(".game-item");
const fightGameBox = document.querySelector(".fight-game-box");
const gameItemsBox = document.querySelector(".game-items-box");
const userItemSelect = document.querySelector(".user-choice");
const houseItemSelect = document.querySelector(".house-choice");
const playAgainBox = document.querySelector(".play-again-box");
const userResult = document.querySelector(".user-result");
const houseResult = document.querySelector(".house-result");
const clearScoreBtn = document.querySelector('.clear-score-btn')
let userScore = 0;
let houseScore = 0;

const getScoreFromLocalStorage = (key) => {
	const storedScore = localStorage.getItem(key);
	return storedScore ? parseInt(storedScore, 10) : 0;
};

const updateScoreInLocalStorage = (key, newScore) => {
	localStorage.setItem(key, newScore.toString());
};

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

	setTimeout(() => {
		houseChoice();
	}, 1000);

	setTimeout(() => {
		gameResult();
	}, 1500);
};

const houseChoice = () => {
	let randomChoice = Math.floor(Math.random() * gameItems.length);
	for (let i = 0; i < gameItems.length; i++) {
		if (randomChoice === gameItems[i].index) {
			houseItemSelect.innerHTML = `<div class="fight-game-item ${gameItems[i].style}" id="${gameItems[i].id}">
            <div class="fight-image-container">
                <p class="fight-game-image"><i class="${gameItems[i].image}"></i></p>
            </div>
        </div>`;
		}
	}
};



const gameResult = () => {
	const userItem = userItemSelect.querySelector(".fight-game-item").id;
	const houseItem = houseItemSelect.querySelector(".fight-game-item").id;

	if (userItem === houseItem) {
		playAgainBox.classList.add("active-play-again-box");
		playAgainBox.innerHTML = `<p class="play-again-text">DRAW</p>
		<button class="play-again-btn">play again</button>`;
	} else if (
		(userItem === "rock" && houseItem === "scissors") ||
		(userItem === "paper" && houseItem === "rock") ||
		(userItem === "scissors" && houseItem === "paper")
	) {
		playAgainBox.classList.add("active-play-again-box");
		playAgainBox.innerHTML = `<p class="play-again-text">YOU WIN</p>
		<button class="play-again-btn">play again</button>`;
		userScore++;
		userResult.textContent = userScore;
		updateScoreInLocalStorage("userScore", userScore);
	} else {
		playAgainBox.classList.add("active-play-again-box");
		playAgainBox.innerHTML = `<p class="play-again-text">YOU LOSE</p>
		<button class="play-again-btn">play again</button>`;
		houseScore++;
		houseResult.textContent = houseScore;
		updateScoreInLocalStorage("houseScore", houseScore);
	}

	const playAgainBtn = playAgainBox.querySelector(".play-again-btn");
	playAgainBtn.addEventListener("click", playAgain);
};

const playAgain = () => {
	gameItemsBox.classList.remove("hide-gime-items");
	fightGameBox.classList.remove("show-fight-game-box");
	playAgainBox.innerHTML = "";
	userItemSelect.innerHTML = "";
	houseItemSelect.innerHTML = "";
};


window.addEventListener("load", () => {
	userScore = getScoreFromLocalStorage("userScore");
	houseScore = getScoreFromLocalStorage("houseScore");
	userResult.textContent = userScore;
	houseResult.textContent = houseScore;
});

rulesBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
rpsItems.forEach((item) => item.addEventListener("click", userChoice));
clearScoreBtn.addEventListener('click', () => {
	userScore = 0;
	houseScore = 0;
	userResult.textContent = userScore;
	houseResult.textContent = houseScore;
	localStorage.clear()

})
