<template>
  <div class="vff">
    <div class="f-container">
      <div class="f-form-wrap">
        <div
          class="vff-animate q-form q-is-active f-fade-in-up field-multiplechoice"
        >
          <div class="q-inner">
            <div class="fh2">
              <span class="f-text"
                >Over deze website&nbsp;
                <span class="f-sub">
                  <span class="f-help about-text"
                    >Ik heb deze website gemaakt omdat de afwegingen bij
                    urineonderzoek, hoewel protocolair, best veel kunnen zijn om
                    te onthouden. De website is gebaseerd op de
                    <a
                      href="https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst"
                      >NHG-standaard Urineweginfecties</a
                    >, de
                    <a
                      href="https://www.nvkc.nl/kwaliteit/richtlijnen/normen-en-richtlijnen"
                      >NVKC richtlijn Eenduidige en accurate
                      laboratoriumdiagnostiek bij hematurie</a
                    >, een artikel in de H&W
                    <a
                      href="https://www.henw.org/artikelen/microscopisch-erytrocytenverlies-de-urine"
                      >Microscopisch erytrocytenverlies in de urine</a
                    >
                    en de
                    <a
                      href="https://www.nvu.nl/kwaliteitsbeleid/richtlijnen/actuele-richtlijnen/"
                      >NVU richtlijn Hematurie</a
                    >. Hopelijk helpt het om het urineonderzoek iets
                    overzichtelijker te maken.
                  </span>
                  <span class="side-column">
                    <a href="https://www.linkedin.com/in/martienoranje/">
                      <img
                        class="about-image"
                        src="../assets/user-image.jpeg"
                        alt="Martien Oranje"
                      />
                    </a>
                  </span>
                </span>
              </span>
            </div>
            <p class="about-name">
              <a href="https://www.linkedin.com/in/martienoranje/"
                >Martien Oranje, huisarts</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .about-text {
    width: calc(100% - 120px);
    float: left;
  }

  /* .side-column {
    width: 120px;
  } */

  .side-column img.about-image {
    border-radius: 50%;
    margin-bottom: 0;
    width: 100px;
    height: 100px;
  }

  .side-column img.about-image:hover {
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }

  p.about-name {
    clear: left;
    overflow: auto;
    font-style: italic;
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 12px;
  }
</style>
