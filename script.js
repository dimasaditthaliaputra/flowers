onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

var audio = document.getElementById("background-music");
audio.volume = 0.5;

document.addEventListener("DOMContentLoaded", function () {
  const envelopeIcon = document.querySelector(".clickable-envelope i");
  const backgroundOverlay = document.querySelector(".background-overlay");
  const container = document.querySelector(".container");
  const closeButton = document.querySelector(".close-button");

  envelopeIcon.addEventListener("click", function (event) {
    backgroundOverlay.style.opacity = "1";
    backgroundOverlay.style.pointerEvents = "auto";
    container.style.display = "grid";
  });

  backgroundOverlay.addEventListener("click", function () {
    backgroundOverlay.style.opacity = "0";
    backgroundOverlay.style.pointerEvents = "none";
    container.style.display = "none";
  });

  backgroundOverlay.addEventListener("click", function () {
    backgroundOverlay.style.opacity = "0";
    backgroundOverlay.style.pointerEvents = "none";
    container.style.display = "none";
  });

  closeButton.addEventListener("click", function () {
    backgroundOverlay.style.opacity = "0";
    backgroundOverlay.style.pointerEvents = "none";
    container.style.display = "none";
  });
});

const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});
