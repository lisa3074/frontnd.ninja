"use strict";
import "@babel/polyfill";
import { galleryStart } from "./modules/portfolio";
import { burgerMenu } from "./modules/burger";
import { menuPunkterDesk } from "./modules/deskNavigation";
import { clickPortfolio } from "./modules/deskNavigation";
import { clickHome } from "./modules/deskNavigation";
import { deskMenu } from "./modules/deskNavigation";
import { loadPortfolio, loadProjectInfo } from "./modules/portfolio";
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
  loadPortfolio();
  loadProjectInfo();
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
  // console.log("position" + position);
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
  if (position > "0.7") {
    //console.log("over7");
    //document.querySelector("#web_productions").textContent = "[web_productions]";
    // clickPortfolio();
  }
  if (position < "0.6") {
    //clickHome();
  }
}
