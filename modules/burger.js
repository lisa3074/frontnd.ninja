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

  person.addEventListener("click", function() {
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
    document.querySelector("#om").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  kryds2.addEventListener("click", function() {
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

  portfolio.addEventListener("click", function() {
    portfolio.classList = "scale_down portfolio mobile_menu";
    burger1.classList = "transition_left burger1";
    burger2.classList = "transition_right_back burger2";
    kryds1.classList = "kryds1 scale_up";
    kryds2.classList = "kryds2 scale_down";
    person.classList = "person scale_up mobile_menu";
    streg.classList = "streg height100";
    cv.classList = "cv fade_out_quick";
    contact.classList = "contact fade_out_quick";
    document.querySelector("#portfolioet").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    document.querySelector(".kategori").textContent = "[ w e b _ p r o d u c t i o n s ]";
  });

  kryds1.addEventListener("click", function() {
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

  home.addEventListener("click", function() {
    kryds1.classList = "kryds1 scale_down";
    kryds2.classList = "kryds2 scale_down";
    burger1.classList = "transition_left_back burger1";
    burger2.classList = "transition_right_back burger2";
    person.classList = "person scale_up mobile_menu";
    portfolio.classList = "scale_up portfolio mobile_menu";
    streg.classList = "streg height60px";
    (document.querySelector(".contact").classList = "contact fade_out_quick"),
      (document.querySelector(".cv").classList = "cv fade_out_quick"),
      document.querySelector(".scroll_to").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  });

  document.querySelectorAll(".burger1 li").forEach(li => {
    li.addEventListener("click", function() {
      kryds1.classList = "kryds1 scale_down";
      kryds2.classList = "kryds2 scale_down";
      burger1.classList.add("transition_left_back");
      burger2.classList.add("transition_right_back");
      person.classList = "person scale_up mobile_menu";
      portfolio.classList = "scale_up portfolio mobile_menu";
      streg.classList = "streg height60px";
    });
  });
  document.querySelector(".graphics").addEventListener("click", function() {
    document.querySelector(".kategori").textContent = "[ g r a p h i c s ]";
  });

  document.querySelector(".old_mobile").addEventListener("click", function() {
    document.querySelector(".kategori").textContent = "[ o l d _ s t u f f ]";
  });

  //mobil
  document.querySelector(".cv_punkt").addEventListener("click", function() {
    document.querySelector(".cv").classList = "cv";
    setTimeout(function() {
      document.querySelector(".cv ol").classList = "fade_in";
    }, 500);
    document.querySelector(".contact").classList = "contact hide";
    document.querySelector(".skriv_tekst").classList = "fade_out skriv_tekst";
    dry();
  });
  //mobil
  document.querySelector(".contact_punkt").addEventListener("click", function() {
    document.querySelector(".contact").classList = "contact";
    setTimeout(function() {
      document.querySelector(".skriv_tekst").classList = "fade_in skriv_tekst";
    }, 500);
    document.querySelector(".cv").classList = "cv hide";
    document.querySelector(".cv ol").classList = "fade_out";
    dry();
  });
  //mobil
  document.querySelector(".me_punkt").addEventListener("click", function() {
    document.querySelector(".om").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setTimeout(function() {
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
