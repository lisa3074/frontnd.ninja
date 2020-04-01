let currPos;
export function delegatenCv() {
  console.log("cvDelegation");
  currPos = 0;
  document.querySelector(".submenu_container").addEventListener("click", changeHeading);
  document.querySelector(".side").addEventListener("click", skip);
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

function skip() {
  console.log("skip");
  if (currPos <= 500) {
    console.log("<= 500");
    document.querySelectorAll(".grid_section").forEach(section => {
      // section.style.setProperty("----currPos", currPos + "vw");
      section.style.transform = `translateX(${currPos}vw)`;
    });
    console.log(currPos);
    currPos += -100;
  } else {
    currPos = 0;
    //  delegatenCv();
  }

  // document.querySelector(".grid_cv").scrollTo(100, 0);
}
