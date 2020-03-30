let gridPositionA;
let gridPositionB;
export function galleryStart() {
  gridPositionA = 0;
  gridPositionB = 0;
  console.log("start");
  document.querySelector(".right_arrow").addEventListener("click", function() {
    moveStuffR();
  });
  document.querySelector(".left_arrow").addEventListener("click", function() {
    moveStuffL();
  });
}

function moveStuffR() {
  gridPositionA += -40;
  gridPositionB += 40;
  console.log("right");
  document.querySelectorAll(".itemA").forEach(item => {
    item.style.setProperty("--positionA", gridPositionA);
    console.log(gridPositionA);
  });
  document.querySelectorAll(".itemB").forEach(item => {
    item.style.setProperty("--positionB", gridPositionB);
    console.log(gridPositionB);
  });
  pointerEvents();
}
function moveStuffL() {
  gridPositionA += 40;
  gridPositionB += -40;
  console.log("left");
  document.querySelectorAll(".itemA").forEach(item => {
    item.style.setProperty("--positionA", gridPositionA);
    console.log(gridPositionA);
  });
  document.querySelectorAll(".itemB").forEach(item => {
    item.style.setProperty("--positionB", gridPositionB);
    console.log(gridPositionB);
  });
  pointerEvents();
}

function pointerEvents() {
  console.log("pointerEvents");
  if (gridPositionA == -160) {
    document.querySelector(".right_arrow").classList.add("none");
  } else {
    document.querySelector(".right_arrow").classList.remove("none");
  }
  if (gridPositionB == 0) {
    document.querySelector(".left_arrow").classList.add("none");
  } else {
    document.querySelector(".left_arrow").classList.remove("none");
  }
}
