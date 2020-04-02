let itemNum;

export function delegateSideMenu() {
  console.log("delegateSideMenu");
  document.querySelector(".menu-open-button").addEventListener("click", setIcons);
}

function setIcons() {
  console.log("setIcons");
  itemNum = 0;
  document.querySelectorAll(".menu-item").forEach(item => {
    item.classList.toggle("move_it");
    itemNum++;
    console.log(itemNum);
    item.style.setProperty("--count", itemNum);
  });
}
