const desk = document.querySelector(".desk");
const index = document.querySelector(".index");
let almPunkter = document.querySelectorAll(".alm_punkt");
let deskPerson = document.querySelector(".desk_person");
let deskPortfolio = document.querySelector(".desk_portfolio");
let deskHome = document.querySelector(".desk_home");
const container = document.querySelector("body");
let position = container.scrollTop / (container.scrollHeight - container.clientHeight);

let deskRight = document.querySelector(".desk_right");
let cv = document.querySelector(".cv");
let contact = document.querySelector(".contact");
let deskLeft = document.querySelector(".desk_left");
let deskRLi = document.querySelectorAll(".desk_right li");
let deskLLi = document.querySelectorAll(".desk_left li");

export function menuPunkterDesk() {
  console.log("menuPunkterDesk");
  almPunkter.forEach(alm => {
    alm.addEventListener("click", function() {
      almPunkter.forEach(alm => {
        let idAtt = this.getAttribute("id");
        let idAttDiff = alm.getAttribute("id");
        alm.textContent = idAttDiff;
      });
      let idAtt = this.getAttribute("id");
      this.textContent = "[" + idAtt + "]";
      console.log("height100");
      desk.classList.remove("height_up_down");
      index.offsetHeight;
      desk.classList.add("height_up_down");
    });
  });

  removelistners();
  deskHome.addEventListener("click", clickHome);
  deskPerson.addEventListener("click", clickPerson);
  document.querySelector("#cv").addEventListener("click", clickCv);
  document.querySelector("#contact").addEventListener("click", clickContact);
  document.querySelector("#me").addEventListener("click", clickMe);
  deskPortfolio.addEventListener("click", clickPortfolio);
}

export function deskMenu() {
  console.log("deskMenu");
  document.querySelector("#graphics").addEventListener("click", function() {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    document.querySelector(".tell").textContent = "Here you can have a look at the graphics I've produced since february 2019.";
  });

  document.querySelector("#web_productions").addEventListener("click", function() {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    document.querySelector(".tell").textContent = "Web productions include websites and games. This is my favorite part of multimedia design, as I am a bit of a nerd when it comes to code";
  });

  document.querySelector("#old_stuff").addEventListener("click", function() {
    document.querySelector(".portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    document.querySelector(".tell").textContent = "This is the part of my portfolio, where I have selected some of my old stuff from before I started studying multimedia design";
  });
}

function clickPortfolio() {
  deskPortfolio.removeEventListener("click", clickPortfolio);
  document.querySelector("#web_productions").textContent = "[web_productions]";
  cv.classList = "cv hide";
  contact.classList = "contact hide";
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  deskHome.classList = "desk_home home_left";
  setTimeout(function() {
    deskPortfolio.classList = "desk_menu desk_portfolio fade_out alm_punkt";
  }, 800);
  deskRight.classList = "desk_right fade_out";
  desk.classList.add("height_up_down");
  deskRLi.forEach(RPunkt => {
    RPunkt.classList.remove("desk_punkt");
  });
  setTimeout(function() {
    deskLeft.classList = "desk_left fade_in";
    deskPerson.classList = "desk_person desk_menu fade_in alm_punkt";
  }, 1500);
  document.querySelector(".portfolioet").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function clickPerson() {
  console.log("||clickPerson");
  deskPerson.removeEventListener("click", clickPerson);
  document.querySelector("#me").textContent = "[me]";
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  cv.classList = "cv hide";
  contact.classList = "contact hide";
  deskHome.classList = "desk_home home_right";
  setTimeout(function() {
    deskPerson.classList = "fade_out desk_person desk_menu alm_punkt";
  }, 800);
  deskLeft.classList = "desk_left fade_out";
  desk.classList.add("height_up_down");
  deskRLi.forEach(RPunkt => {
    RPunkt.classList.add("desk_punkt");
  });
  setTimeout(function() {
    deskRight.classList = "desk_right fade_in";
    deskPortfolio.classList.add("fade_in");
  }, 1500);
  document.querySelector(".om").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function clickCv() {
  console.log("||clickCV");
  document.querySelector("#cv").removeEventListener("click", clickCv);
  setTimeout(function() {
    document.querySelector(".contact").classList = "contact hide";
    document.querySelector(".cv").classList = "cv";
    document.querySelector(".cv ol").classList = "";
  }, 500);
}

function clickHome() {
  console.log("||clickHome");
  deskHome.removeEventListener("click", clickHome);
  almPunkter.forEach(alm => {
    let idAttDiff = alm.getAttribute("id");
    alm.textContent = idAttDiff;
    console.log(idAttDiff);
  });
  cv.classList = "cv hide";
  contact.classList = "contact hide";
  desk.classList.remove("height_up_down");
  index.offsetHeight;
  deskHome.classList = "home_center desk_home";
  deskRight.classList = "fade_out desk_right";
  deskLeft.classList = "fade_out desk_left";
  desk.classList.add("height_up_down");
  deskRLi.forEach(RPunkt => {
    RPunkt.classList.remove("desk_punkt");
  });
  setTimeout(function() {
    deskPerson.classList = "desk_person desk_menu fade_in alm_punkt";
    deskPortfolio.classList = "desk_portfolio desk_menu alm_punkt";
  }, 700);

  document.querySelector(".scroll_to").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function clickContact() {
  console.log("||clickContact");
  document.querySelector("#contact").removeEventListener("click", clickContact);
  setTimeout(function() {
    document.querySelector(".cv").classList = "cv hide";
    document.querySelector(".contact").classList = "contact";
    document.querySelector(".skriv_tekst").classList = "skriv_tekst";
  }, 500);
}

function clickMe() {
  console.log("||clickContact");
  document.querySelector("#me").removeEventListener("click", clickMe);
  setTimeout(function() {
    document.querySelector(".cv").classList = "cv hide";
    document.querySelector(".contact").classList = "contact hide";
  }, 500);
  document.querySelector(".om").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function removelistners() {
  almPunkter.forEach(alm => {
    alm.removeEventListener("click", function() {});
  });
}
