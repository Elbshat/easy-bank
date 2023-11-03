"use strict";

const toggleBtn = document.querySelector(".toggle-nav");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

let isNavOpen = false;
function toggle() {
  if (isNavOpen) {
    nav.classList.remove("toggle");
    overlay.classList.remove("toggle");
  } else {
    nav.classList.add("toggle");
    overlay.classList.add("toggle");
  }
  isNavOpen = !isNavOpen;
  toggleBtn.innerHTML = `
        <svg>
            <use xlink:href="./img/sprite.svg#icon-${
              isNavOpen ? "close" : "hamburger"
            }"></use>
        </svg>
  `;
}

toggleBtn.addEventListener("click", toggle);
// /////////////////////////////////////////////
//
