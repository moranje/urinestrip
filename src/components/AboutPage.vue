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
                  <span class="f-help"
                    >Ik heb deze website gemaakt omdat de afwegingen bij
                    urineonderzoek, hoewel protocolair, best veel kunnen zijn om
                    te onthouden. De website is gebaseerd op de
                    <a
                      href="https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst"
                      >NHG-standaard Urineweginfecties</a
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
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHNxuv05XthiA/profile-displayphoto-shrink_100_100/0/1517608294451?e=1664409600&amp;v=beta&amp;t=qEpF33cFUj_x1ezER7kzOsnjFfnFBkNqNo1KW4eWjoA"
                        alt="Martien Oranje"
                      />
                    </a>
                  </span>
                </span>
              </span>
              <div class="about-name">
                <a href="https://www.linkedin.com/in/martienoranje/"
                  >Martien Oranje, huisarts</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .f-help {
    width: calc(100% - 120px);
    float: left;
  }

  .side-column {
    /* width: 120px;÷ */
  }

  .side-column img.about-image {
    border-radius: 50%;
    margin-bottom: 0;
  }

  .side-column img.about-image:hover {
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }

  div.about-name {
    overflow: auto;
    font-size: medium;
    font-style: italic;
    font-weight: 400;
    text-transform: uppercase;
  }
</style>
