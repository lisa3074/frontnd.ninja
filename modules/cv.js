let currPos;
let pos;
export function delegatenCv() {
  console.log("cvDelegation");
  currPos = 0;
  pos = 0;
  backToSkip();
  document.querySelector(".menu-open-button").addEventListener("click", changeHeading);
  document.querySelectorAll("#contact, #cv, #person, #me, #portfolio, .desk_home").forEach((punkt) => {
    punkt.addEventListener("click", reset);
  });
  setPosition();
}

function reset() {
  console.log("reset");
  document.querySelectorAll(".grid_section").forEach((section) => {
    section.style.setProperty("--currPos", 0);
    document.querySelector(".cv_headings").textContent = "education";
  });
}

function setPosition() {
  console.log("setPosition");
  document.querySelector("#education").addEventListener("click", function () {
    pos = 0;
    move();
  });
  document.querySelector("#experience").addEventListener("click", function () {
    pos = 100;
    console.log(currPos);
    move();
  });
  document.querySelector("#tech").addEventListener("click", function () {
    pos = 200;
    move();
  });
  document.querySelector("#software").addEventListener("click", function () {
    pos = 300;
    move();
  });
  document.querySelector("#volunteer").addEventListener("click", function () {
    pos = 400;
    move();
  });
  document.querySelector("#language").addEventListener("click", function () {
    pos = 500;
    move();
  });
}

function changeHeading() {
  console.log("changeHeading");
  document.querySelectorAll(".sub_cv").forEach((sub) => {
    sub.addEventListener("click", function () {
      console.log("clicked");
      const heading = this.getAttribute("id");
      console.log(heading);
      //document.querySelector(".cv_headings").style.transitionDuration = "1s";
      document.querySelector(".cv_headings").classList.remove("fade_in_quick2");
      document.querySelector(".cv_headings").classList.add("fade_out_quick2");
      setTimeout(() => {
        document.querySelector(".cv_headings").textContent = heading;
        document.querySelector(".cv_headings").classList.remove("fade_out_quick2");
        document.querySelector(".cv_headings").classList.add("fade_in_quick2");
      }, 300);
    });
  });
}

function backToSkip() {
  console.log("BackToSkip");
  /*  document.querySelector(".side").addEventListener("click", skip); */
}

function skip() {
  console.log("skip");
  if (currPos == -500) {
    currPos = 0;
    move();
  } else {
    console.log("<= 500");
    currPos += -100;
    move();
    console.log(currPos);
    backToSkip();
  }
}

function move() {
  currPos = "-" + pos;
  document.querySelectorAll(".grid_section").forEach((section) => {
    section.style.setProperty("--currPos", currPos);
  });
}
