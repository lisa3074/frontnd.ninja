const portfolioUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/portfolio?per_page=100";
const projectInfoUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/projektbilleder?per_page=100";
let count;
let filter = "web_productions";
let json = 0;
let portfolio;
let projectInfo;
let gridLength;
let translate;
let finalGridLength;
let resetLength;

export async function loadPortfolio() {
  let response = await fetch(portfolioUrl);
  portfolio = await response.json();
  countJSON();
}

export async function loadProjectInfo() {
  let response = await fetch(projectInfoUrl);
  projectInfo = await response.json();
  countJSON();
}

function countJSON() {
  console.log("countJSON");
  json++;
  console.log(json);
  if (json == 2) {
    console.log("2 x json");
    displayPortfolio();
  }
}

function displayPortfolio() {
  console.log("displayPortfolio");
  const portfolioGridA = document.querySelector(".above");
  const portfolioGridB = document.querySelector(".below");
  const portfolioTemplateA = document.querySelector(".portfolio_templateA");
  const portfolioTemplateB = document.querySelector(".portfolio_templateB");
  const projectList = document.querySelector(".projekt_billede_liste");
  const singlePicInfo = document.querySelector(".beskriv");
  portfolioGridA.innerHTML = "";
  portfolioGridB.innerHTML = "";
  count = 0;

  portfolio.forEach((project) => {
    if (project.kategori == filter || filter == "alle") {
      count++;

      if (count % 2 == 0) {
        console.log("Even Number");
        console.log("Even" + " " + count);
        const klon = portfolioTemplateA.cloneNode(true).content;
        screenSize(project, klon);
        klon.querySelector("img").alt = project.titel;
        klon.querySelector(".titel_klonen").textContent = project.titel + " - " + project.semester;
        klon.querySelector(".itemA").setAttribute("class", "pr" + count + " portfolio_klonen itemA");
        klon.firstElementChild.addEventListener("click", function () {
          singlePicInfo.textContent = "";
          projectList.innerHTML = "";
          checkType(project, singlePicInfo, projectList);
        });
        portfolioGridA.appendChild(klon);
      } else {
        console.log("Odd Number");
        console.log("Odd" + " " + count);
        const klon = portfolioTemplateB.cloneNode(true).content;
        screenSize(project, klon);
        klon.querySelector("img").alt = project.titel;
        klon.querySelector(".titel_klonen").textContent = project.titel + " - " + project.semester;
        klon.querySelector(".itemB").setAttribute("class", "pr" + count + " portfolio_klonen itemB");
        klon.firstElementChild.addEventListener("click", function () {
          singlePicInfo.textContent = "";
          projectList.innerHTML = "";
          checkType(project, singlePicInfo, projectList);
        });
        portfolioGridB.appendChild(klon);
        countLength();
      }
    }
  });
  galleryStart();
  hideArrows();
}

function screenSize(project, klon) {
  if (innerWidth <= 800) {
    klon.querySelector("img").src = project.thumbnail_lille.guid;
  } else if (innerWidth <= 1050) {
    klon.querySelector("img").src = project.thumbnail_medium.guid;
  } else if (innerWidth <= 1400) {
    klon.querySelector("img").src = project.thumbnail_stor.guid;
  } else {
    klon.querySelector("img").src = project.thumbnail_xstor.guid;
  }
}

function hideArrows() {
  if (innerWidth < 500) {
    if (count < 2 || count == 2) {
      addDisabled();
    } else {
      removeDisabled();
    }
  } else {
    if (count < 4 || count == 4) {
      addDisabled();
    } else {
      removeDisabled();
    }
  }
}

function addDisabled() {
  document.querySelector(".right_arrow").classList.add("none");
  document.querySelector(".left_arrow").classList.add("none");
  document.querySelector(".left_arrow").classList.add("greyed_out");
  document.querySelector(".right_arrow").classList.add("greyed_out");
}

function removeDisabled() {
  document.querySelector(".right_arrow").classList.remove("none");
  document.querySelector(".right_arrow").classList.remove("greyed_out");
  document.querySelector(".left_arrow").classList.add("none");
  document.querySelector(".left_arrow").classList.add("greyed_out");
}

function checkType(project, singlePicInfo, projectList) {
  if (project.sorter == 2) {
    displaySiglePicture(project, singlePicInfo);
  } else {
    displayProject(project, projectList);
  }
  document.querySelector(".luk").addEventListener("click", function () {
    console.log("luk");
    document.querySelector("iframe").src = "";
  });
}

function displayProject(project, projectList) {
  console.log("diplayProject");
  const singlePicTemplate = document.querySelector(".portfolio_single_skabelon");
  const klon = singlePicTemplate.cloneNode(true).content;
  const billede = klon.querySelector("img");
  projectList.innerHTML = "";
  document.querySelector(".projekt_popup").classList = "projekt_popup";
  document.querySelector(".beskrivelse").textContent = project.beskrivelse;
  document.querySelector(".overskrift_beskriv").textContent = project.titel;
  document.querySelector(".semester").textContent = project.semester;
  if (project.dokumentation == "") {
    document.querySelector(".documentation").classList.add("hide");
  } else {
    document.querySelector(".documentation").href = project.dokumentation.guid;
  }
  if (project.video == "") {
    klon.querySelector(".website").classList.add("hide");
    klon.querySelector(".website_text").classList.add("hide");
  } else {
    klon.querySelector(".website").src = project.video.guid;
    klon.querySelector(".website").poster = project.videoposter.guid;
  }
  if (project.projektvideo == "") {
    klon.querySelector(".projektvideo").classList.add("hide");
    klon.querySelector(".project_video_text").classList.add("hide");
  } else {
    klon.querySelector(".projektvideo").src = project.projektvideo.guid;
    klon.querySelector(".projektvideo").poster = project.projektvideo_poster.guid;
  }
  klon.querySelector(".titel").textContent = project.titel;
  if (innerWidth >= 880) {
    if (project.embed == 1) {
      klon.querySelector("iframe").src = project.embedlink;
    } else {
      klon.querySelector("iframe").classList.add("hide");
      klon.querySelector(".iframe_txt").classList.add("hide");
    }
  } else {
    klon.querySelector("iframe").classList.add("hide");
    klon.querySelector(".iframe_txt").classList.add("hide");
  }
  projectSize(project, billede);
  checkLink(project);
  listen(klon, project);
  projectList.appendChild(klon);
}

function displaySiglePicture(project, singlePicInfo) {
  console.log("displaySiglePicture");
  const billede = document.querySelector(".et_billede");
  document.querySelector(".single").classList = "single fade_in_quick";
  projectSize(project, billede);
  singlePicInfo.textContent = project.beskrivelse;
  document.querySelector(".enkelt").addEventListener("click", function () {
    document.querySelector(".single").classList = "single fade_out_quick";
  });
}

function projectSize(project, billede) {
  console.log("projectSize");
  if (innerWidth <= 400) {
    if (project.projektbillede_xlille == false) {
      billede.src = project.projektbillede_lille.guid;
    } else {
      billede.src = project.projektbillede_xlille.guid;
    }
  } else if (innerWidth <= 800) {
    billede.src = project.projektbillede_lille.guid;
  } else if (innerWidth <= 1050) {
    billede.src = project.projektbillede_medium.guid;
  } else if (innerWidth <= 1400) {
    billede.src = project.projektbillede_stor.guid;
  } else {
    if (project.projektbillede_xstor == false) {
      billede.src = project.projektbillede_stor.guid;
    } else {
      billede.src = project.projektbillede_xstor.guid;
    }
  }
}

function listen(klon, project) {
  klon.querySelector("img").addEventListener("click", function () {
    const billede = document.querySelector(".et_billede");
    document.querySelector(".single").classList = "single fade_in_quick";
    projectSize(project, billede);
  });

  document.querySelector(".enkelt").addEventListener("click", function () {
    document.querySelector(".single").classList = "single fade_out_quick";
  });
}

function checkLink(project) {
  const link = document.querySelector(".link");
  if (project.link == "") {
    link.classList.remove("a");
    link.textContent = "";
    link.removeAttribute("href");
  } else {
    link.classList.add("a");
    link.href = project.link;
    link.textContent = "link to website";
    document.querySelector(".tilbage").addEventListener("mouseover", function () {
      setTimeout(function () {
        link.classList = "link a fade_out_quick";
      }, 300);
    });
  }
}

export function filtrering() {
  document.querySelectorAll(".filter").forEach((knap) => {
    knap.addEventListener("click", function () {
      filter = this.dataset.kategori;
      console.log(filter);
      setTimeout(() => {
        displayPortfolio();
      }, 500);
      resetGridPositions();
    });
  });
}

let gridPositionA;
let gridPositionB;
function galleryStart() {
  console.log("||galleryStart");
  calculateMovement();
  console.log("final :" + finalGridLength);
  gridPositionA = 0;
  gridPositionB = 0;
  finalGridLength = resetLength;

  console.log("gridPositionA: " + gridPositionA + " gridPositionB: " + gridPositionB + " finalGridLength: " + finalGridLength);
  document.querySelector(".right_arrow").addEventListener("click", moveStuffR);
  document.querySelector(".left_arrow").addEventListener("click", moveStuffL);
}

function moveStuffR() {
  console.log("||moveStuffR");
  finalGridLength = finalGridLength - 50;
  if (innerWidth < 500) {
    gridPositionA += -100;
    gridPositionB += 100;
  } else {
    if (finalGridLength > gridPositionB) {
      console.log("mindre");
      gridPositionA += -100;
      gridPositionB += 100;
    } else {
      console.log("større");
      gridPositionA += -50;
      gridPositionB += 50;
    }
  }
  console.log("final: " + finalGridLength + " position B: " + gridPositionB);
  console.log("right");
  document.querySelectorAll(".itemA").forEach((item) => {
    item.style.setProperty("--positionA", gridPositionA);
    console.log(gridPositionA);
  });
  document.querySelectorAll(".itemB").forEach((item) => {
    item.style.setProperty("--positionB", gridPositionB);
    console.log(gridPositionB);
  });
  pointerEvents();
}

function moveStuffL() {
  console.log("||moveStuffL");
  finalGridLength = finalGridLength - 100;
  if (innerWidth < 500) {
    gridPositionA += 100;
    gridPositionB += -100;
  } else {
    if (finalGridLength > gridPositionA) {
      gridPositionA += 100;
      gridPositionB += -100;
    } else {
      gridPositionA += 50;
      gridPositionB += -50;
    }
    if (gridPositionA == 0) {
      finalGridLength = resetLength;
      console.log("reset");
    }
  }
  console.log("final: " + finalGridLength + " gridPositionA: " + gridPositionA);

  console.log("left");
  document.querySelectorAll(".itemA").forEach((item) => {
    item.style.setProperty("--positionA", gridPositionA);
    console.log(gridPositionA);
  });
  document.querySelectorAll(".itemB").forEach((item) => {
    item.style.setProperty("--positionB", gridPositionB);
    console.log(gridPositionB);
  });
  pointerEvents();
}

function countLength() {
  console.log("||countLength");
  if (innerWidth < 500) {
    if (count % 2 == 0) {
      let gridfirst = count / 2;
      console.log("gridFirst" + " " + gridfirst);
      gridLength = Math.round(gridfirst) * 100;
      console.log("gridLength" + " " + gridLength);
    } else {
      let gridfirst = count / 2;
      console.log("gridFirst" + " " + gridfirst);
      gridLength = Math.round(gridfirst) * 100;
      console.log("gridLength" + " " + gridLength);
    }
  } else {
    if (count % 2 == 0) {
      let gridfirst = count / 2;
      console.log("gridFirst" + " " + gridfirst);
      gridLength = Math.round(gridfirst) * 50;
      //gridLength = (count / 2) * 40;
      console.log("gridLength" + " " + gridLength);
    } else {
      let gridfirst = count / 2;
      console.log("gridFirst" + " " + gridfirst);
      gridLength = Math.round(gridfirst) * 50;
      console.log("gridLength" + " " + gridLength);
    }
  }
  hideArrows();
  setLength();
}

function setLength() {
  console.log("||setLength");
  if (innerWidth <= 500) {
    translate = gridLength - 100;
  } else {
    translate = gridLength - 100;
  }

  console.log(translate);
  console.log(gridLength);
  document.querySelector(".background_below").style.width = gridLength + "vw";
  document.querySelector(".background_above").style.width = gridLength + "vw";
  document.querySelector(".grid_pictures").style.width = gridLength + "vw";
  document.querySelector(".background_below").style.transform = "translateX(-" + translate + "vw)";
  document.querySelector(".background_above").style.transform = "translateX(0vw)";
}

function calculateMovement() {
  if (gridLength % 100) {
    console.log("ulige");
    const midLength = gridLength / 100;
    finalGridLength = (Math.round(midLength) - 1) * 100;
    resetLength = finalGridLength;
    console.log(finalGridLength);
  } else {
    console.log("lige");
    finalGridLength = gridLength;
    resetLength = finalGridLength;
  }
}

function pointerEvents() {
  console.log("||pointerEvents");
  console.log(translate);
  if (gridPositionA == "-" + translate) {
    document.querySelector(".right_arrow").classList.add("none");
    document.querySelector(".right_arrow").classList.add("greyed_out");
  } else {
    document.querySelector(".right_arrow").classList.remove("none");
    document.querySelector(".right_arrow").classList.remove("greyed_out");
  }
  if (gridPositionB == 0) {
    document.querySelector(".left_arrow").classList.add("none");
    document.querySelector(".left_arrow").classList.add("greyed_out");
  } else {
    document.querySelector(".left_arrow").classList.remove("none");
    document.querySelector(".left_arrow").classList.remove("greyed_out");
  }
}

function resetGridPositions() {
  console.log("||resetGridPositions");
  gridPositionA = 0;
  gridPositionB = 0;
}
