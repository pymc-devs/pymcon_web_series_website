// Rocket Lunch Animation

function starsAnimation() {
	let count = 50;
	if(screen.width <= 1024){
		count = 35;
	}
	if(screen.width <= 600){
		count = 20;
	}


	let scene = document.querySelector(".header_right");
	let i = 0;
	while (i < count) {
		let star = document.createElement("star");
		let x = Math.floor(Math.random() * window.innerWidth);

		let duration = Math.random() * 3;
		let h = Math.random() * 70;

		star.style.left = x + "px";
		star.style.width = 1 + "px";
		star.style.height = h + "px";
		star.style.animationDuration = duration + "s";

		scene.appendChild(star);
		i++;
	}
}
starsAnimation();