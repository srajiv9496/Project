function randomNumber1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndno1 = randomNumber1(1, 6);
const rndno2 = randomNumber1(1, 6);

let image = "images/dice" + rndno1 + ".png";
let image2 = "images/dice" + rndno2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (rndno1 === rndno2) {
  document.querySelector("h1").innerHTML = "Draw!!!";
} else if (rndno1 > rndno2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins 🎉";
} else {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins 🎉";
}
