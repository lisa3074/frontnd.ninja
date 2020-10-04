let itemNum;

export function delegateSideMenu() {
  console.log("delegateSideMenu");
  document.querySelector(".menu-open-button").addEventListener("click", setIcons);
  document.querySelectorAll(".sub_cv").forEach((clicked) => {
    clicked.addEventListener("click", setIcons);
  });
}

function setIcons() {
  console.log("setIcons");
  itemNum = 0;
  document.querySelector(".hamburger-1").classList.toggle("hamburger-11");
  document.querySelector(".hamburger-2").classList.toggle("hamburger-22");
  document.querySelector(".hamburger-3").classList.toggle("hamburger-33");
  // document.querySelector(".hamburger").classList.toggle("big");
  document.querySelector(".hamburger").classList.toggle("small");

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("move_it");
    itemNum++;
    console.log(itemNum);
    item.style.setProperty("--count", itemNum);
  });
}
