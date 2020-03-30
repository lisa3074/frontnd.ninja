"use strict";
import "@babel/polyfill";
import { galleryStart } from "./modules/gallery";
import { burgerMenu } from "./modules/burger";
import { menuPunkterDesk } from "./modules/deskNavigation";
import { deskMenu } from "./modules/deskNavigation";
import { hentJson } from "./modules/portfolio";
import { filtrering } from "./modules/portfolio";
import { delegateBox } from "./modules/infoBox";

const index = document.querySelector(".index");
let position = 0;
const container = document.querySelector("body");
const scrollBar = document.querySelector("#scrollbar");

window.addEventListener("DOMContentLoaded", mainDelegation);

document.querySelector(".enkelt").addEventListener("click", function() {
  document.querySelector(".et_billede").src = "";
});

function mainDelegation() {
  console.log("mainDelegation");
  //Alle sider fader ind ved load
  setTimeout(function() {
    index.classList.add("smooth_in");
  }, 500);
  menuPunkterDesk();
  burgerMenu();
  deskMenu();
  hentJson();
  filtrering();
  isAboutVisible();
  galleryStart();
  displayYear();
  delegateBox();
  container.addEventListener("scroll", displayScrollbar);
  container.addEventListener("scroll", isAboutVisible);
  scrollBar.style.setProperty("--position", position);
}

function displayYear() {
  const date = new Date();
  document.querySelector(".year").textContent = date.getFullYear();
}

function displayScrollbar() {
  position = container.scrollTop / (container.scrollHeight - container.clientHeight);
  //console.log("position" + position);
  scrollBar.style.setProperty("--position", position);
}

function isAboutVisible() {
  console.log("about");
  if (position < "0.1") {
    document.querySelector("#om").classList = "fade_out_slow om";
  }
  if (position > "0.1") {
    document.querySelector("#om").classList = "fade_in_slow om";
  }
  if (position > "0.6") {
    document.querySelector("#om").classList = "fade_out_slow om";
  }
}

/* function projektListe() {
  console.log("projektListe");
  const projektListe = document.querySelector(".projekt_billede_liste");
  const projektSkabelon = document.querySelector(".portfolio_single_skabelon");
  projektListe.innerHTML = "";

  projektBilleder.forEach(billede => {
    if (projekt.sorteringstitel == billede.sorteringstitel) {
      const klon = projektSkabelon.cloneNode(true).content;
      klon.querySelector("img").src = billede.billede.guid;
      portfolioListe.appendChild(klon);
    }
  });
} */
