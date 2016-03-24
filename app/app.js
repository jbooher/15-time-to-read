import Reading from "./modules/Reading";

const content = document.querySelector(".content--article").textContent;
const words = Array.from(content.split(" ")).filter((word) => {
  return word !== "";
});
const slow = document.querySelector("#slow");
const normal = document.querySelector("#normal");
const fast = document.querySelector("#fast");
const genius = document.querySelector("#genius");

console.log(Math.floor(words.length / 230));

const readTime = new Reading(words);

readTime.render();

slow.addEventListener("click", (e) => {
  readTime.speed = 1;
  readTime.render();
  console.log(document.querySelector(".selected"));
  document.querySelector(".selected").classList.remove("selected");
  slow.classList.toggle("selected");
});

normal.addEventListener("click", (e) => {
  readTime.speed = 2;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  normal.classList.toggle("selected");
});

fast.addEventListener("click", (e) => {
  readTime.speed = 3;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  fast.classList.toggle("selected");
});

genius.addEventListener("click", (e) => {
  readTime.speed = 4;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  genius.classList.toggle("selected");
});
