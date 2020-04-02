"use strict";
import "@babel/polyfill";
import { galleryStart } from "./modules/portfolio";
import { burgerMenu } from "./modules/burger";
import { delegateMenu } from "./modules/deskNavigation";
import { subMenu } from "./modules/deskNavigation";
import { loadPortfolio, loadProjectInfo } from "./modules/portfolio";
import { filtrering } from "./modules/portfolio";
import { delegateBox } from "./modules/infoBox";
import { delegatenCv } from "./modules/cv";
import { delegateSideMenu } from "./modules/sideMenu";

const index = document.querySelector(".index");
let position = 0;
const container = document.querySelector("body");
const scrollBar = document.querySelector("#scrollbar");

window.addEventListener("DOMContentLoaded", mainDelegation);

function mainDelegation() {
  console.log("mainDelegation");
  //Alle sider fader ind ved load
  setTimeout(function() {
    index.classList.add("smooth_in");
  }, 500);
  delegateMenu();
  burgerMenu();
  subMenu();
  loadPortfolio();
  loadProjectInfo();
  filtrering();
  isAboutVisible();
  galleryStart();
  displayYear();
  delegateBox();
  delegatenCv();
  delegateSideMenu();

  document.querySelector(".pil_ned").addEventListener("click", clickPil);
  container.addEventListener("scroll", displayScrollbar);
  container.addEventListener("scroll", invertColors);
  container.addEventListener("scroll", isAboutVisible);
  scrollBar.style.setProperty("--position", position);
  document.querySelector(".enkelt").addEventListener("click", function() {
    document.querySelector(".et_billede").src = "";
  });
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
}
3;
function clickPil() {
  console.log("clickPil");
  const clicked = document.querySelector(".clicked");
  const pil = document.querySelector(".pil_ned");
  document.querySelector(".pil_ned").classList.add("clicked");
  if (clicked) {
    console.log("clicked");
    document.querySelector("#om").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    console.log("clicked");
    setTimeout(() => {
      document.querySelector("#om").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 1100);

    pil.classList.add("clicked");
    invertColors();
  }
}

function invertColors() {
  document.querySelector(".bw").classList.remove("fade_in_quick2");
  document.querySelector(".bw").classList.add("fade_out_quick2");
  setTimeout(() => {
    document.querySelector(".bw").classList.add("hide");
    document.querySelector(".colored").classList.remove("hide");
    document.querySelector(".index_position").classList.add("bgcolor");
    document.querySelector(".navn").classList.add("textcolor");
    document.querySelector(".ninja").classList.add("textcolor");
  }, 500);
  setTimeout(() => {
    document.querySelector(".colored").classList.remove("fade_out_quick2");
    document.querySelector(".colored").classList.add("fade_in_quick2");
  }, 800);
}
