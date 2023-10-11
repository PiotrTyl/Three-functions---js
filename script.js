const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;

const increase = () => {
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};
const decrease = () => {
	if (fontSize <= 25) return;

	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
};

const colorChanger = () => {
	p.style.backgroundColor = "rgb(110, 24, 45)";
};

sizeUp.addEventListener("click", increase);
sizeDown.addEventListener("click", decrease);
colorBtn.addEventListener("click", colorChanger);
