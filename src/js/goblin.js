/* eslint-disable prettier/prettier */
export function rawPosition() {
  const position = [...document.querySelectorAll(".block")];
  const ran = Math.floor(Math.random() * position.length);
  position[ran].classList.add("goblin");
  setInterval(changePosition, 1000, position);
}
function changePosition() {
  const position = [...document.querySelectorAll(".block")];
  const goblin = document.querySelector(".goblin");
  const posGoblin = position.indexOf(goblin);
  const ran = Math.floor(Math.random() * position.length);
  if (posGoblin !== ran) {
    position[posGoblin].classList.remove("goblin");
    position[ran].classList.add("goblin");
  }
}
