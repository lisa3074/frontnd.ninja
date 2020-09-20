let currPos;
let pos;
export function delegatenCv() {
  console.log("cvDelegation");
  currPos = 0;
  pos = 0;

  /*   document.querySelectorAll("#cv, .cv_punkt, .cv_link, #contact, #person, #me, #portfolio, .desk_home, .person, web, .graphics, .contact_punkt, .me_punkt").forEach((punkt) => { */
  document
    .querySelectorAll(
      "#cv, .cv_punkt, .cv_link, #contact, #person, #me, #portfolio, .desk_home, .web, .graphics, .contact_punkt, .me_punkt"
    )
    .forEach((punkt) => {
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
    document.querySelector(".education").scrollTo(0, 0);
  });
}
function setPosition() {
  console.log("setPosition");
  document.querySelector("#education").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".education");
    pos = 0;
    move(top);
  });
  document.querySelector("#experience").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".experience");
    pos = 100;
    console.log(currPos);
    move(top);
  });
  document.querySelector("#tech").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".tech");
    pos = 200;
    move(top);
  });
  document.querySelector("#software").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".software");
    pos = 300;
    move(top);
  });
  document.querySelector("#volunteer").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".volunteer");
    pos = 400;
    move(top);
  });
  document.querySelector("#language").addEventListener("click", function () {
    reset();
    const top = document.querySelector(".language");
    pos = 500;
    move(top);
  });
}

function move(top) {
  currPos = "-" + pos;
  document.querySelectorAll(".grid_section").forEach((section) => {
    section.style.setProperty("--currPos", currPos);
  });
  top.scrollTo(0, 0);
}
