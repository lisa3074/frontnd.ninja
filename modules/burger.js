export function burgerMenu() {
  console.log("burgerMenu");
  const person = document.querySelector(".person");
  const portfolio = document.querySelector(".portfolio");
  const burger1 = document.querySelector(".burger1");
  const burger2 = document.querySelector(".burger2");
  const kryds1 = document.querySelector(".kryds1");
  const kryds2 = document.querySelector(".kryds2");
  const home = document.querySelector(".home");
  const streg = document.querySelector(".streg");
  const cv = document.querySelector(".cv");
  const contact = document.querySelector(".contact");
  const innerWidth = window.innerWidth;

  person.removeEventListener("click", function () {});
  home.removeEventListener("click", function () {});
  portfolio.removeEventListener("click", function () {});
  kryds1.removeEventListener("click", function () {});
  kryds2.removeEventListener("click", function () {});
  kryds2.removeEventListener("click", function () {});
  document.querySelector(".me_punkt").removeEventListener("click", function () {});

  person.addEventListener("click", function () {
    let positionPx = document.querySelector("body").scrollTop;
    console.log("positionPx" + positionPx);
    console.log("scroll function");
    person.classList.remove("scale_up");
    person.classList.add("scale_down");
    burger2.classList.add("transition_right");
    burger2.classList.remove("transition_right_back");
    burger1.classList.add("transition_left_back");
    kryds2.classList.add("scale_up");
    kryds1.classList.add("scale_down");
    kryds1.classList.remove("scale_up");
    portfolio.classList.remove("scale_down");
    portfolio.classList.add("scale_up");
    streg.classList.add("height100");
    streg.classList.remove("height60px");

    if (innerWidth < 500) {
      console.log("chrome");
      document.querySelector(".linkPerson").setAttribute("href", "#om");
      //document.querySelector(".linkPerson").href = "#om";
    } else {
      console.log("not chrome");
      /*   document.querySelector(".om").scrollIntoViewIfNeeded(false); */
      document.querySelector(".om").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  kryds2.addEventListener("click", function () {
    burger2.classList.add("transition_right_back");
    burger2.classList.remove("transition_right");
    kryds2.classList.remove("scale_up");
    kryds2.classList.add("scale_down");
    person.classList.remove("scale_down");
    person.classList.add("scale_up");
    kryds2.classList.add("scale_down");
    streg.classList.remove("height100");
    streg.classList.add("height60px");
  });

  portfolio.addEventListener("click", function () {
    console.log("gp til portfolio");
    document.querySelector("#portfolioet").classList.remove("hide");
    portfolio.classList = "scale_down portfolio mobile_menu";
    burger1.classList = "transition_left burger1";
    burger2.classList = "transition_right_back burger2";
    kryds1.classList = "kryds1 scale_up";
    kryds2.classList = "kryds2 scale_down";
    person.classList = "person scale_up mobile_menu";
    streg.classList = "streg height100";
    cv.classList = "cv fade_out_quick";
    setTimeout(() => {
      cv.classList = "cv hide";
    }, 500);
    contact.classList = "contact fade_out_quick";
    if (innerWidth < 500) {
      console.log("chrome");
      document.querySelector(".linkPortfolio").setAttribute("href", "#portfolioet");
    } else {
      document.querySelector(".portfolioet").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  kryds1.addEventListener("click", function () {
    burger1.classList.add("transition_left_back");
    burger1.classList.remove("transition_left");
    kryds1.classList.remove("scale_up");
    kryds1.classList.add("scale_down");
    portfolio.classList.remove("scale_down");
    portfolio.classList.add("scale_up");
    kryds1.classList.add("scale_down");
    streg.classList.remove("height100");
    streg.classList.add("height60px");
  });

  home.addEventListener("click", function () {
    kryds1.classList = "kryds1 scale_down";
    kryds2.classList = "kryds2 scale_down";
    burger1.classList = "burger1 transition_left_back";
    burger2.classList = "burger2 transition_right_back";
    person.classList = "person mobile_menu scale_up";
    portfolio.classList = "portfolio mobile_menu scale_up";
    streg.classList = "streg height60px";
    contact.classList = "contact fade_out_quick";
    cv.classList = "cv fade_out_quick";
    setTimeout(() => {
      cv.classList = "cv hide";
    }, 500);

    document.querySelector(".scroll_to").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  document
    .querySelectorAll(
      ".contact_punkt, .cv_punkt, .me_punkt, .graphics, .old_mobile, .web, .first_year, .second_year, .third_year, .fourth_year"
    )
    .forEach((li) => {
      li.addEventListener("click", function () {
        kryds1.classList = "kryds1 scale_down";
        kryds2.classList = "kryds2 scale_down";
        burger1.classList.add("transition_left_back");
        burger2.classList.add("transition_right_back");
        person.classList = "person scale_up mobile_menu";
        portfolio.classList = "scale_up portfolio mobile_menu";
        streg.classList = "streg height60px";
      });
    });

  document.querySelector(".first_year").addEventListener("click", function () {
    document.querySelector(".kategori").textContent = "[   1 s t _ y e a r   ]";
    document.querySelector(".tell").textContent = "Projects from 1. & 2. semester in Multimedia Design. ";
    document.querySelector(".tell2").textContent =
      "Static and dynamic websites, mini-games, prototypes and animations.";
  });

  document.querySelector(".second_year").addEventListener("click", function () {
    document.querySelector(".kategori").textContent = "[   2 n d _ y e a r   ]";
    document.querySelector(".tell").textContent = "Projects from 3. & 4. semester in Multimedia Design.";
    document.querySelector(".tell2").textContent = "Includes semi complex, interactive and dynamic web productions.";
  });

  //FOR THE NEXT SEMESTERS
  /*   document.querySelector(".third_year").addEventListener("click", function () {
    document.querySelector(".kategori").textContent = "[   3 r d _ y e a r  ]";
    document.querySelector(".tell").textContent =
      "Projects from 1. & 2. semester in Web development.";
    document.querySelector(".tell2").textContent =
      "Includes more complex, interactive and dynamic web productions.";
  });
  document.querySelector(".fourth_year").addEventListener("click", function () {
    document.querySelector(".kategori").textContent = "[   4 t h _ y e a r   ]";
    document.querySelector(".tell").textContent =
      "Projects from 3. semester in Web development.";
        document.querySelector(".tell2").textContent =
      "Includes more complex, interactive and dynamic web productions.";
  }); */

  //mobil
  document.querySelector(".cv_punkt").addEventListener("click", function () {
    document.querySelector(".cv").classList = "cv";
    document.querySelector(".contact").classList = "contact hide";
    document.querySelector(".skriv_tekst").classList = "fade_out_slow skriv_tekst";
    dry();
  });
  //mobil
  document.querySelector(".contact_punkt").addEventListener("click", function () {
    document.querySelector(".contact").classList = "contact";
    setTimeout(function () {
      document.querySelector(".skriv_tekst").classList = "fade_in_slow skriv_tekst";
    }, 500);
    document.querySelector(".cv").classList = "cv hide";
    dry();
  });
  //mobil
  document.querySelector(".me_punkt").addEventListener("click", function () {
    document.querySelector(".om").scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
      },
      true
    );
    setTimeout(function () {
      document.querySelector(".cv").classList = "cv hide";
      document.querySelector(".contact").classList = "contact hide";
    }, 300);
    dry();
  });
}

function dry() {
  const person = document.querySelector(".person");
  const burger2 = document.querySelector(".burger2");
  const kryds2 = document.querySelector(".kryds2");
  const streg = document.querySelector(".streg");

  if (innerWidth < 700) {
    burger2.classList.add("transition_right_back");
    burger2.classList.remove("transition_right");
    kryds2.classList.remove("scale_up");
    kryds2.classList.add("scale_down");
    person.classList.remove("scale_down");
    person.classList.add("scale_up");
    kryds2.classList.add("scale_down");
    streg.classList.remove("height100");
    streg.classList.add("height60px");
  }
}
