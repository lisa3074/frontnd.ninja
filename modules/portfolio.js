const url = "https://frontnd.ninja/wordpress/wp-json/wp/v2/portfolio?per_page=100";
const projektUrl = "https://frontnd.ninja/wordpress/wp-json/wp/v2/projektbilleder?per_page=100";
let portfolio;
let projektBilleder;
let count;
let filter = "web_productions";

export async function hentJson() {
  console.log("hentJson");
  //indlæsning af json
  let response = await fetch(url);
  let projektResponse = await fetch(projektUrl);
  //Vent til alt er hentet
  portfolio = await response.json();
  projektBilleder = await projektResponse.json();
  hentPortfolio();
}

function hentPortfolio() {
  console.log("hentPortfolio");
  const portfolioListe = document.querySelector(".portfolio_liste");
  const portfolioSkabelon = document.querySelector(".portfolio_skabelon");
  portfolioListe.innerHTML = "";
  count = 0;

  portfolio.forEach(projekt => {
    if (projekt.kategori == filter || filter == "alle") {
      count++;
      const klon = portfolioSkabelon.cloneNode(true).content;
      klon.querySelector("img").src = projekt.thumbnail.guid;
      klon.querySelector(".titel_klonen").textContent = projekt.titel;
      klon.querySelector(".portfolio_klonen").setAttribute("class", "pr" + count + " portfolio_klonen");
      klon.firstElementChild.addEventListener("click", function() {
        let lilleBeskrivelse = document.querySelector(".beskriv");
        lilleBeskrivelse.textContent = "";
        const projektListe = document.querySelector(".projekt_billede_liste");
        projektListe.innerHTML = "";

        if (projekt.sorter == 2) {
          document.querySelector(".single").classList = "single fade_in_quick";
          document.querySelector(".et_billede").src = projekt.billede.guid;
          lilleBeskrivelse.textContent = projekt.beskrivelse;
          document.querySelector(".enkelt").addEventListener("click", function() {
            document.querySelector(".single").classList = "single fade_out_quick";
          });
        } else {
          console.log("clone 1 clicked m beskrivelse");
          document.querySelector(".projekt_popup").classList = "projekt_popup";
          document.querySelector(".beskrivelse").textContent = projekt.beskrivelse;
          document.querySelector(".titel").textContent = projekt.titel;
          document.querySelector(".overskrift_beskriv").textContent = projekt.titel;

          console.log("projektListe");
          const projektListe = document.querySelector(".projekt_billede_liste");
          const projektSkabelon = document.querySelector(".portfolio_single_skabelon");
          projektListe.innerHTML = "";

          projektBilleder.forEach(billede => {
            console.log("projektbilleder");
            if (projekt.sorteringstitel == billede.sorteringstitel) {
              const klon = projektSkabelon.cloneNode(true).content;
              klon.querySelector("img").src = billede.billede.guid;
              klon.querySelector(".enkelt_beskrivelse").textContent = billede.beskrivelse;
              if (projekt.link == "") {
                document.querySelector(".live").classList.remove("a");
                document.querySelector(".live").textContent = "";
                document.querySelector(".live").removeAttribute("href");
              } else {
                document.querySelector(".live").classList.add("a");
                document.querySelector(".live").href = projekt.link;
                document.querySelector(".live").textContent = "link to website";
                document.querySelector(".tilbage").addEventListener("mouseover", function() {
                  setTimeout(function() {
                    document.querySelector(".live").classList = "live a fade_out_quick";
                  }, 300);
                });
              }
              klon.firstElementChild.addEventListener("click", function() {
                document.querySelector(".single").classList = "single fade_in_quick";
                document.querySelector(".et_billede").src = billede.billede.guid;
              });
              document.querySelector(".enkelt").addEventListener("click", function() {
                document.querySelector(".single").classList = "single fade_out_quick";
              });
              projektListe.appendChild(klon);
            }
          });
        }
      });
      portfolioListe.appendChild(klon);
    }
  });
}

export function filtrering() {
  document.querySelectorAll(".filter").forEach(knap => {
    knap.addEventListener("click", function() {
      filter = this.dataset.kategori;
      console.log(filter);
      setTimeout(function() {
        hentPortfolio();
      }, 500);
    });
  });
}
