const container = document.querySelector(".container");
let blub = 0;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("like-btn");

  button.addEventListener("click", () => {
    blub++;
    container.innerHTML = `
    <div class="score">Blub : ${blub}</div>`;
    // Crée l'élément +1
    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.textContent = "+1";

    // Ajoute l'élément au bouton
    button.appendChild(plusOne);

    // Supprime l'élément après l'animation
    plusOne.addEventListener("animationend", () => {
      plusOne.remove();
    });
  });
});
