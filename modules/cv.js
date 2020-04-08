let currPos;
let pos;
export function delegatenCv() {
  console.log("cvDelegation");
  currPos = 0;
  pos = 0;
  backToSkip();
  //document.querySelector(".menu-open-button").addEventListener("click", changeHeading);

  document.querySelectorAll("#cv, .cv_punkt, .cv_link, #contact, #person, #me, #portfolio, .desk_home, .person, web, .graphics, .contact_punkt, .me_punkt").forEach((punkt) => {
    punkt.addEventListener("click", reset);
    punkt.addEventListener("touchstart", reset);
  });
  setPosition();
}

function reset() {
  console.log("reset");
  document.querySelectorAll(".grid_section").forEach((section) => {
    document.querySelector("#back").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    section.style.setProperty("--currPos", 0);
    //document.querySelector(".cv_headings").textContent = "education";
  });
}
function setPosition() {
  console.log("setPosition");
  document.querySelector("#education").addEventListener("click", function () {
    reset();
    pos = 0;
    move();
  });
  document.querySelector("#experience").addEventListener("click", function () {
    reset();
    pos = 100;
    console.log(currPos);
    move();
  });
  document.querySelector("#tech").addEventListener("click", function () {
    reset();
    pos = 200;
    move();
  });
  document.querySelector("#software").addEventListener("click", function () {
    reset();
    pos = 300;
    move();
  });
  document.querySelector("#volunteer").addEventListener("click", function () {
    reset();
    pos = 400;
    move();
  });
  document.querySelector("#language").addEventListener("click", function () {
    reset();
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

function move() {
  currPos = "-" + pos;
  document.querySelectorAll(".grid_section").forEach((section) => {
    section.style.setProperty("--currPos", currPos);
  });
}
