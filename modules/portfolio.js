const portfolioUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/portfolio?per_page=100";
const projectInfoUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/projektbilleder?per_page=100";
let count;
let filter = "web_productions";
let json = 0;
let portfolio;
let projectInfo;

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
//num=0;
//foreach - num +=1
//item data-num = num;
/* if ( num % 2 == 0) {
  console.log('Even Number');
  classList.add("itemA")
  append to above
}else{
  console.log('Odd Number');
classList.add("itemB")
  append to below
}  */

//PILE
//if(num % 2 == 0)
//num / 2 * 40 eller -40
//else - (num / 2 + 1) * 40 eller -40

function displayPortfolio() {
  console.log("hentPortfolio");
  const portfolioList = document.querySelector(".portfolio_liste");
  const portfolioTemplate = document.querySelector(".portfolio_skabelon");
  const projectList = document.querySelector(".projekt_billede_liste");
  const singlePicInfo = document.querySelector(".beskriv");
  portfolioList.innerHTML = "";
  count = 0;

  portfolio.forEach(project => {
    if (project.kategori == filter || filter == "alle") {
      count++;
      const klon = portfolioTemplate.cloneNode(true).content;
      klon.querySelector("img").src = project.thumbnail.guid;
      klon.querySelector(".titel_klonen").textContent = project.titel;
      klon.querySelector(".portfolio_klonen").setAttribute("class", "pr" + count + " portfolio_klonen");
      klon.firstElementChild.addEventListener("click", function() {
        singlePicInfo.textContent = "";
        projectList.innerHTML = "";
        checkType(project, singlePicInfo, projectList);
      });
      portfolioList.appendChild(klon);
    }
  });
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
      }, 500);
    });
  });
}
