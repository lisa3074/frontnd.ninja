const desk = document.querySelector(".desk");
const index = document.querySelector(".index");
const almPunkter = document.querySelectorAll(".alm_punkt");
const deskPerson = document.querySelector(".desk_person");
const deskPortfolio = document.querySelector(".desk_portfolio");
const deskHome = document.querySelector(".desk_home");
const deskRight = document.querySelector(".desk_right");
const cv = document.querySelector(".cv");
const cvLink = document.querySelector(".cv_link");
const contact = document.querySelector(".contact");
const deskLeft = document.querySelector(".desk_left");
const deskRLi = document.querySelectorAll(".desk_right li");

export function delegateMenu() {
  //Ryd op
  deskHome.removeEventListener("click", function () {});
  deskPortfolio.removeEventListener("click", function () {});
  deskPerson.removeEventListener("click", function () {});

  console.log("menuPunkterDesk");
  almPunkter.forEach((alm) => {
    alm.addEventListener("click", function () {
      almPunkter.forEach((alm) => {
        let idAttDiff = alm.getAttribute("id");

        idAttDiff === "first_year"
          ? (alm.textContent = "1st_year")
          : idAttDiff === "second_year"
          ? (alm.textContent = "2nd_year")
          : idAttDiff === "third_year"
          ? (alm.textContent = "3rd_year")
          : idAttDiff === "fourth_year"
          ? (alm.textContent = "4th_year")
          : (alm.textContent = idAttDiff);
      });
      let idAtt = this.getAttribute("id");
      idAtt === "first_year"
        ? (this.textContent = "[ 1st_year ]")
        : idAtt === "second_year"
        ? (this.textContent = "[ 2nd_year ]")
        : idAtt === "third_year"
        ? (this.textContent = "[ 3rd_year ]")
        : idAtt === "fourth_year"
        ? (this.textContent = "[ 4th_year ]")
        : (this.textContent = "[" + idAtt + "]");
      desk.classList.remove("height_up_down");
      index.offsetHeight;
      desk.classList.add("height_up_down");
    });
  });
  deskHome.addEventListener("click", clickHome);
  deskPerson.addEventListener("click", clickPerson);
  cvLink.addEventListener("click", clickPerson);
  deskPortfolio.addEventListener("click", clickPortfolio);
}

export function subMenu() {
  console.log("deskMenu");
  deskHome.addEventListener("click", function () {
    almPunkter.forEach((alm) => {
      let idAttDiff = alm.getAttribute("id");
      alm.textContent = idAttDiff;
      console.log(idAttDiff);
    });
  });

  document.querySelectorAll("#cv, .cv_link").forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(function () {
        contact.classList = "contact hide";
        document.querySelector(".contact .social").classList = "social hide";
        document.querySelector(".cv").classList = "cv";
        document.querySelector(".portfolioet").classList = "portfolioet hide";
      }, 500);
    });
  });

  document.querySelector("#contact").addEventListener("click", function () {
    setTimeout(function () {
      document.querySelector(".cv").classList = "cv hide";
      contact.classList = "contact";
      document.querySelector(".contact .social").classList = "social";
      document.querySelector(".portfolioet").classList = "portfolioet hide";
      document.querySelector(".skriv_tekst").classList = "skriv_tekst";
      document.querySelectorAll(".grid_section").forEach((section) => {});
    }, 500);
  });

  document.querySelector("#me").addEventListener("click", function () {
    setTimeout(function () {
      document.querySelector(".cv").classList = "cv hide";
      contact.classList = "contact hide";
      document.querySelector(".contact .social").classList = "social hide";
      document.querySelector(".portfolioet").classList = "portfolioet hide";
    }, 500);
    document.querySelector(".om").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  document.querySelector("#first_year").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".kategori").textContent = "[ 1st_year ]";
    document.querySelector(".tell").textContent = "Projects from 1. & 2. semester in Multimedia Design. ";
    document.querySelector(".tell2").textContent =
      "Static and dynamic websites, mini-games, prototypes and animations.";
  });

  document.querySelector("#second_year").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".kategori").textContent = "[ 2nd_year ]";
    document.querySelector(".tell").textContent = "Projects from 3. & 4. semester in Multimedia Design.";
    document.querySelector(".tell2").textContent = "Includes semi complex, interactive and dynamic web productions.";
  });
  //FOR THE NEXT SEMESTERS
  /*  document.querySelector("#third_year").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".kategori").textContent = "[ 3rd_year ]";
      document.querySelector(".tell").textContent =
      "Projects from 1. & 2. semester in Web development.";
    document.querySelector(".tell2").textContent =
      "Includes more complex, interactive and dynamic web productions.";
  });
  document.querySelector("#fourth_year").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".kategori").textContent = "[ 4th_year ]";
  document.querySelector(".tell").textContent =
      "Projects from 3. semester in Web development.";
    document.querySelector(".tell2").textContent =
      "Includes more complex, interactive and dynamic web productions.";
  }); */
}

function clickHome() {
  setTimeout(() => {
    document.querySelector(".portfolioet").classList = "portfolioet hide";
  }, 500);
  cv.classList = "cv hide";
  contact.classList = "contact hide";

  deskHome.classList = "home_center desk_home";
  deskRight.classList = "fade_out desk_right";
  deskLeft.classList = "fade_out hide desk_left";

  deskRLi.forEach((RPunkt) => {
    RPunkt.classList.remove("desk_punkt");
  });
  setTimeout(function () {
    deskPerson.classList = "desk_person desk_menu fade_in alm_punkt";
    deskPortfolio.classList = "desk_portfolio desk_menu fade_in alm_punkt";
  }, 400);
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  desk.classList.add("height_up_down");
  document.querySelector(".scroll_to").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function clickPerson() {
  setTimeout(() => {
    document.querySelector(".portfolioet").classList = "portfolioet hide";
  }, 500);
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  cv.classList = "cv hide";
  contact.classList = "contact hide";
  deskHome.classList = "desk_home home_right";

  deskPerson.classList = "fade_out desk_person desk_menu alm_punkt";
  deskLeft.classList = "desk_left fade_out";
  desk.classList.add("height_up_down");
  deskRLi.forEach((RPunkt) => {
    RPunkt.classList.add("desk_punkt");
  });
  setTimeout(function () {
    deskRight.classList = "desk_right fade_in";
    deskPortfolio.classList.add("fade_in");
  }, 800);
  document.querySelector(".om").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function clickPortfolio() {
  console.log("clickPortfolio");
  document.querySelector(".portfolioet").classList = "portfolioet";
  contact.classList = "contact hide";
  document.querySelector(".contact .social").classList = "social hide";
  document.querySelector(".cv").classList = "cv hide";
  document.querySelector("#second_year").textContent = "[2nd_year]";
  document.querySelector(".kategori").textContent = "[ 2nd_year ]";
  cv.classList = "cv hide";
  contact.classList = "contact hide";

  deskHome.classList = "desk_home home_left";
  setTimeout(function () {
    deskPortfolio.classList = "desk_menu desk_portfolio fade_out alm_punkt";
  }, 500);
  deskRight.classList = "desk_right fade_out";

  deskRLi.forEach((RPunkt) => {
    RPunkt.classList.remove("desk_punkt");
  });
  deskLeft.classList = "fade_out desk_left";
  setTimeout(function () {
    deskLeft.classList = "desk_left fade_in";
    deskPerson.classList = "desk_person desk_menu fade_in alm_punkt";
  }, 800);
  deskPerson.textContent = "person";
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  desk.classList.add("height_up_down");
  document.querySelector(".portfolioet").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
