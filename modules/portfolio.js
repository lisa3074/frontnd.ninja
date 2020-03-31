const portfolioUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/portfolio?per_page=100";
const projectInfoUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/projektbilleder?per_page=100";
let count;
let filter = "web_productions";
let json = 0;
let portfolio;
let projectInfo;
let gridLength;
let translate;

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
  console.log("hentPortfolio");
  // const portfolioList = document.querySelector(".portfolio_liste");
  const portfolioGridA = document.querySelector(".above");
  const portfolioGridB = document.querySelector(".below");
  //const portfolioTemplate = document.querySelector(".portfolio_skabelon");
  const portfolioTemplateA = document.querySelector(".portfolio_templateA");
  const portfolioTemplateB = document.querySelector(".portfolio_templateB");
  const projectList = document.querySelector(".projekt_billede_liste");
  const singlePicInfo = document.querySelector(".beskriv");
  //portfolioList.innerHTML = "";
  portfolioGridA.innerHTML = "";
  portfolioGridB.innerHTML = "";
  count = 0;

  portfolio.forEach(project => {
    if (project.kategori == filter || filter == "alle") {
      count++;

      if (count % 2 == 0) {
        console.log("Even Number");
        console.log("Even" + " " + count);
        const klon = portfolioTemplateA.cloneNode(true).content;
        klon.querySelector("img").src = project.thumbnail.guid;
        klon.querySelector(".titel_klonen").textContent = project.titel;
        klon.querySelector(".itemA").setAttribute("class", "pr" + count + " portfolio_klonen itemA");
        klon.firstElementChild.addEventListener("click", function() {
          singlePicInfo.textContent = "";
          projectList.innerHTML = "";
          checkType(project, singlePicInfo, projectList);
        });
        portfolioGridA.appendChild(klon);
      } else {
        console.log("Odd Number");
        console.log("Odd" + " " + count);
        const klon = portfolioTemplateB.cloneNode(true).content;
        klon.querySelector("img").src = project.thumbnail.guid;
        klon.querySelector(".titel_klonen").textContent = project.titel;
        klon.querySelector(".itemB").setAttribute("class", "pr" + count + " portfolio_klonen itemB");
        klon.firstElementChild.addEventListener("click", function() {
          singlePicInfo.textContent = "";
          projectList.innerHTML = "";
          checkType(project, singlePicInfo, projectList);
        });
        portfolioGridB.appendChild(klon);
      }
    }
  });
  countLength();
}

function displayProjectInfo(project, projectList) {
  console.log("projektListe");
  const singlePicTemplate = document.querySelector(".portfolio_single_skabelon");
  projectList.innerHTML = "";
  projectInfo.forEach(billede => {
    console.log("projektbilleder");
    if (project.sorteringstitel == billede.sorteringstitel) {
      const klon = singlePicTemplate.cloneNode(true).content;
      klon.querySelector("img").src = billede.billede.guid;
      klon.querySelector(".enkelt_beskrivelse").textContent = billede.beskrivelse;
      checkLink(project);
      listen(klon);
      projectList.appendChild(klon);
    }
  });
}

function checkType(project, singlePicInfo, projectList) {
  if (project.sorter == 2) {
    document.querySelector(".single").classList = "single fade_in_quick";
    document.querySelector(".et_billede").src = project.billede.guid;
    singlePicInfo.textContent = project.beskrivelse;
    document.querySelector(".enkelt").addEventListener("click", function() {
      document.querySelector(".single").classList = "single fade_out_quick";
    });
  } else {
    console.log("clone 1 clicked m beskrivelse");
    document.querySelector(".projekt_popup").classList = "projekt_popup";
    document.querySelector(".beskrivelse").textContent = project.beskrivelse;
    document.querySelector(".titel").textContent = project.titel;
    document.querySelector(".overskrift_beskriv").textContent = project.titel;
    displayProjectInfo(project, projectList);
  }
}

function listen(klon) {
  klon.firstElementChild.addEventListener("click", function() {
    document.querySelector(".single").classList = "single fade_in_quick";
    document.querySelector(".et_billede").src = billede.billede.guid;
  });
  document.querySelector(".enkelt").addEventListener("click", function() {
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
    document.querySelector(".tilbage").addEventListener("mouseover", function() {
      setTimeout(function() {
        link.classList = "link a fade_out_quick";
      }, 300);
    });
  }
}

export function filtrering() {
  document.querySelectorAll(".filter").forEach(knap => {
    knap.addEventListener("click", function() {
      filter = this.dataset.kategori;
      console.log(filter);
      setTimeout(function() {
        displayPortfolio();
        galleryStart();
        resetGridPositions();
      }, 500);
    });
  });
}

let gridPositionA;
let gridPositionB;
export function galleryStart() {
  console.log("galleryStart");
  gridPositionA = 0;
  gridPositionB = 0;
  console.log(gridPositionA + gridPositionB);
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

function countLength() {
  console.log("countLength");
  if (count % 2 == 0) {
    gridLength = (count / 2) * 40;
    console.log("gridLength" + " " + gridLength);
  } else {
    let gridfirst = count / 2;
    console.log("gridFirst" + " " + gridfirst);
    gridLength = Math.round(gridfirst) * 40;
    console.log("gridLength" + " " + gridLength);
  }
  setLength();
}

function setLength() {
  console.log("setLength");
  translate = gridLength - 80;

  console.log(translate);
  console.log(gridLength);
  document.querySelector(".background_below").style.width = gridLength + "vw";
  document.querySelector(".background_above").style.width = gridLength + "vw";
  document.querySelector(".grid_pictures").style.width = gridLength + "vw";
  document.querySelector(".background_below").style.transform = "translateX(-" + translate + "vw)";
  document.querySelector(".background_above").style.transform = "translateX(0vw)";
}

function pointerEvents() {
  console.log("pointerEvents");
  console.log(translate);
  if (gridPositionA == "-" + translate) {
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

function resetGridPositions() {
  gridPositionA = 0;
  gridPositionB = 0;
}
