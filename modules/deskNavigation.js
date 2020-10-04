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
  // let menuPunkter = document.querySelectorAll(".desk_punkt");
  //Ryd op
  deskHome.removeEventListener("click", function () {});
  deskPortfolio.removeEventListener("click", function () {});
  deskPerson.removeEventListener("click", function () {});

  console.log("menuPunkterDesk");
  almPunkter.forEach((alm) => {
    alm.addEventListener("click", function () {
      almPunkter.forEach((alm) => {
        let idAttDiff = alm.getAttribute("id");
        alm.textContent = idAttDiff;
      });
      let idAtt = this.getAttribute("id");
      this.textContent = "[" + idAtt + "]";
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
        document.querySelector(".contact").classList = "contact hide";
        document.querySelector(".cv").classList = "cv";
        document.querySelector(".portfolioet").classList = "portfolioet hide";
      }, 500);
    });
  });

  document.querySelector("#contact").addEventListener("click", function () {
    setTimeout(function () {
      document.querySelector(".cv").classList = "cv hide";
      document.querySelector(".contact").classList = "contact";
      document.querySelector(".portfolioet").classList = "portfolioet hide";
      document.querySelector(".skriv_tekst").classList = "skriv_tekst";
      document.querySelectorAll(".grid_section").forEach((section) => {});
    }, 500);
  });

  document.querySelector("#me").addEventListener("click", function () {
    setTimeout(function () {
      document.querySelector(".cv").classList = "cv hide";
      document.querySelector(".contact").classList = "contact hide";
      document.querySelector(".portfolioet").classList = "portfolioet hide";
    }, 500);
    document.querySelector(".om").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  document.querySelector("#graphics").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".tell").textContent = "Graphics includes illustrations, photos and everything in between.";
  });

  document.querySelector("#web_productions").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".tell").textContent = "Web productions include websites, mini-games and animations.";
  });

  document.querySelector("#old_stuff").addEventListener("click", function () {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    document.querySelector(".tell").textContent =
      "This is the part of my portfolio, where I have selected some of my old stuff from before I started studying multimedia design";
  });
}

function clickHome() {
  setTimeout(() => {
    document.querySelector(".portfolioet").classList = "portfolioet hide";
  }, 500);
  cv.classList = "cv hide";
  contact.classList = "contact hide";

  deskHome.classList = "home_center desk_home";
  deskRight.classList = "fade_out desk_right";
  deskLeft.classList = "fade_out desk_left";

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
  document.querySelector("#me").textContent = "[me]";
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  cv.classList = "cv hide";
  contact.classList = "contact hide";
  deskHome.classList = "desk_home home_right";
  setTimeout(function () {
    deskPerson.classList = "fade_out desk_person desk_menu alm_punkt";
  }, 500);
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
  document.querySelector(".contact").classList = "contact hide";
  document.querySelector(".cv").classList = "cv hide";
  document.querySelector("#web_productions").textContent = "[web_productions]";
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
  setTimeout(function () {
    deskLeft.classList = "desk_left fade_in";
    deskPerson.classList = "desk_person desk_menu fade_in alm_punkt";
  }, 800);
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  desk.classList.add("height_up_down");
  document.querySelector(".portfolioet").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
