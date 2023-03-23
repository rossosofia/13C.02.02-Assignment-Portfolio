"use strict"

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const cardInfo = card.querySelector("#container");
      const cardImg = card.querySelector("#card-img");
      cardInfo.classList.remove("hidden");
      cardImg.classList.add("blur");
    });
  
    card.addEventListener("mouseleave", () => {
      const cardInfo = card.querySelector("#container");
      const cardImg = card.querySelector("#card-img");
      cardInfo.classList.add("hidden");
      cardImg.classList.remove("blur");
    });
  });

