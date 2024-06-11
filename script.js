const d = document;
$body = d.body;

d.addEventListener("DOMContentLoaded", rain);

function rain() {
  let amount = 150,
    i = 0;

  while (i < amount) {
    let heart = d.createElement("span"),
      fontSize = Math.floor(Math.random() * 7) + 3,
      posX = Math.floor(Math.random() * window.innerWidth),
      duration = Math.random() * 6 + 1,
      delay = Math.random() * -20;
    heart.classList.add("corazon");

    heart.style.setProperty("--fs", fontSize + "px");
    heart.style.left = posX + "px";
    heart.style.animationDelay = delay + "s";
    heart.style.animationDuration = duration + "s";

    $body.appendChild(heart);
    i++;
  }
}
