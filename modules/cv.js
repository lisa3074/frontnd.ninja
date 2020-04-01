let currPos;
export function delegatenCv() {
  console.log("cvDelegation");
  currPos = 0;
  backToSkip();
  document.querySelector(".submenu_container").addEventListener("click", changeHeading);
  //document.querySelector(".side").addEventListener("click", skip);
}

function changeHeading() {
  console.log("changeHeading");
  document.querySelector(".cv_nav_mobile").classList.toggle("hide");
  document.querySelectorAll(".sub_cv a").forEach(sub => {
    sub.addEventListener("click", function() {
      console.log("clicked");
      const heading = this.textContent;
      console.log(heading);
      document.querySelector(".cv_headings").textContent = heading;
      document.querySelector(".cv_nav_mobile").classList.add("hide");
    });
  });
}

function backToSkip() {
  console.log("BackToSkip");
  document.querySelector(".side").addEventListener("click", skip);
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
  document.querySelectorAll(".grid_section").forEach(section => {
    //section.style.transform = `translateX(${currPos}vw)`;
    section.style.setProperty("--currPos", currPos);
  });
}
