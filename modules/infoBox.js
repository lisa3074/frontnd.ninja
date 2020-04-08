const opacityContainers = document.querySelectorAll(".beskrivelse, .overskrift_beskriv, .link, .semester, .documentation");

export function delegateBox() {
  document.querySelector(".info").addEventListener("mouseenter", displayInfo);
  //document.querySelector(".beskrivelse_wrapper").addEventListener("touchmove", displayInfo);
  document.querySelector(".tilbage").addEventListener("touch", closeInfo);
  document.querySelector(".tilbage").addEventListener("mouseover", closeInfo);

  document.querySelector(".luk").addEventListener("click", function () {
    document.querySelector(".projekt_popup").classList = "projekt_popup hide";
    closeInfo();
  });
}

function displayInfo() {
  console.log("displayInfo");
  document.querySelector(".beskrivelse_wrapper").classList = "enlarge beskrivelse_wrapper";
  document.querySelector(".info").style.right = "-1rem";
  setTimeout(function () {
    console.log("opacity 1, mouse");
    opacityContainers.forEach((container) => {
      container.classList.add("fade_in_quick");
      container.classList.remove("fade_out_quick");
    });
    document.querySelector(".info").classList = "hide info";
    document.querySelector(".tilbage").classList = "tilbage";
  }, 1300);
  setTimeout(function () {
    document.querySelector(".tilbage").classList.add("hover");
  }, 1000);
  delegateBox();
}

function closeInfo() {
  document.querySelector(".tilbage").removeEventListener("touch", closeInfo);
  setTimeout(() => {
    document.querySelector(".beskrivelse_wrapper").classList = "beskrivelse_wrapper smaller";
    document.querySelector(".info").style.right = "-1.5rem";
  }, 500);

  setTimeout(function () {
    document.querySelector(".tilbage").classList = "tilbage hide";
    document.querySelector(".info").classList = "info";
  }, 1000);
  console.log("opacity 0, clik tilbage");
  opacityContainers.forEach((container) => {
    container.classList.remove("fade_in_quick");
    container.classList.add("fade_out_quick");
  });
  delegateBox();
}
