"use strict";
import "@babel/polyfill";
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
const innerHwidth = window.innerWidth;

window.addEventListener("DOMContentLoaded", mainDelegation);

function mainDelegation() {
  console.log("mainDelegation");
  //Alle sider fader ind ved load
  setTimeout(function () {
    index.classList.add("smooth_in");
  }, 500);
  delegateMenu();
  burgerMenu();
  subMenu();
  loadPortfolio();
  loadProjectInfo();
  filtrering();
  isAboutVisible();
  //galleryStart();
  displayYear();
  delegateBox();
  delegatenCv();
  delegateSideMenu();
  setHeight();
  isBrowserChrome();
  document.querySelector(".send").addEventListener("click", (e) => {
    // e.preventDefault();
    submitUserForm(e);
  });

  document.querySelector("#select").addEventListener("change", function () {
    const subjecktChosen = event.target.value;
    subject(subjecktChosen);
  });

  window.addEventListener("resize", setHeight);
  document.querySelector(".pil_ned").addEventListener("click", clickPil);
  container.addEventListener("scroll", displayScrollbar);
  container.addEventListener("scroll", invertColors);
  container.addEventListener("scroll", isAboutVisible);
  scrollBar.style.setProperty("--position", position);
  document.querySelector(".enkelt").addEventListener("click", function () {
    document.querySelector(".et_billede").src = "";
  });
}
function submitUserForm(e) {
  console.log("submitted captcha");
  var response = grecaptcha.getResponse();
  const select = document.querySelector(".select").value;
  const fname = document.querySelector(".fnavn").value;
  const mail = document.querySelector(".mail").value;
  const message = document.querySelector(".besked").value;
  if (response.length == 0) {
    e.preventDefault();
    console.log(response.length);
    console.log("WHY");
    document.querySelector("#g-recaptcha-error").innerHTML = '<span style="color:red;">This field is required.</span>';
    return false;
  } else {
    document.querySelector(".select2").value = select;
    document.querySelector(".fnavn2").value = fname;
    document.querySelector(".mail2").value = mail;
    document.querySelector(".besked2").value = message;
    setTimeout(() => {
      document.querySelector("#hidden_form").submit();
    }, 200);
  }
}

function isBrowserChrome() {
  if (innerWidth < 500) {
    console.log("mobile");
    document.querySelector(".linkPil").setAttribute("href", "#om");
    //document.querySelector(".linkPil").href = "#om";
  }
}
function setHeight() {
  console.log("setHeight");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(vh);
}

function displayYear() {
  const date = new Date();
  document.querySelector(".year").textContent = date.getFullYear();
}

function displayScrollbar() {
  position = container.scrollTop / (container.scrollHeight - container.clientHeight);
  scrollBar.style.setProperty("--position", position);
}

function isAboutVisible() {
  console.log("about");
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    document.querySelector("#om").classList = "fade_in_slow om";
  } else {
    if (position < "0.1") {
      document.querySelector("#om").classList = "fade_out_slow om";
    }
    if (position > "0.1") {
      document.querySelector("#om").classList = "fade_in_slow om";
    }
  }
}
3;
function clickPil() {
  console.log("clickPil");
  const clicked = document.querySelector(".clicked");
  const pil = document.querySelector(".pil_ned");
  document.querySelector(".pil_ned").classList.add("clicked");
  if (innerWidth > 399) {
    if (clicked) {
      console.log("clicked");

      console.log("not chrome");
      document.querySelector("#om").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("clicked");
      setTimeout(() => {
        console.log("not chrome");
        document.querySelector("#om").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 1100);
    }

    pil.classList.add("clicked");
    invertColors();
  }
}

function invertColors() {
  container.removeEventListener("scroll", invertColors);
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

function subject(subjectChosen) {
  console.log("subject");
  document.querySelector(".select").value = subjectChosen;
}
