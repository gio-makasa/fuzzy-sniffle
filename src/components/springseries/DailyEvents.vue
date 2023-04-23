<template>
  <div id="dailyEvents">
    <h3>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>

    <div id="highrollers">
      <div class="tournaments">
        <div>
          <p>Holdem Highrollers</p>
          <p class="tournamentPrize">50 000 &#8382;</p>
        </div>
        <div>
          <p>ბაი-ინი - 550&#8382;</p>
          <p class="tournamentDate">27 აპრილი</p>
        </div>
        <img src="/assets/tournament-bg.png" alt="tournament" />
      </div>

      <div class="tournaments">
        <div>
          <p>Omaha Highrollers</p>
          <p class="tournamentPrize">50 000 &#8382;</p>
        </div>
        <div>
          <p>ბაი-ინი - 550&#8382;</p>
          <p class="tournamentDate">28 აპრილი</p>
        </div>
        <img src="/assets/tournament-bg.png" alt="tournament" />
      </div>
    </div>

    <div class="tournaments" id="mainTournament">
      <div>
        <p>Main Events</p>
        <p class="tournamentPrize">150 000&#8382;</p>
      </div>
      <div>
        <p>ბაი-ინი - 550&#8382;</p>
        <p class="tournamentDate">29 აპრილი</p>
      </div>
      <picture>
        <source
          media="(max-width: 500px)"
          srcset="/assets/main-bg-sm.png"
        />
        <img src="/assets/main-bg.png" alt="main-tournamentx" />
      </picture>
    </div>

    <p>
      * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
      Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
      მისაღებად.
    </p>
  </div>
</template>

<style lang="scss" scoped>
#dailyEvents {
  position: relative;
  background-color: $backgroundDarkColor;
  border-radius: 1.6rem;
  border: 0.3rem solid $darkGrey;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.2rem 2rem;

  h3 {
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  #highrollers {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;

    div {
      justify-content: start;
    }

    .tournamentDate {
      background-color: $lightBrown;
    }
  }

  #mainTournament {
    .tournamentDate {
      color: #094b3d;
      background-color: #d7c860;
    }
  }

  .tournaments {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 8.5rem;
    width: 100%;
    padding: 0 1rem;
    text-align: left;

    p {
      font-size: 1.5rem;
      width: fit-content;
      position: relative;
      z-index: 1;
    }

    .tournamentPrize {
      color: $darkYellow;
      font-size: 2.5rem;
    }

    .tournamentDate {
      padding: 0.5rem 2rem;
      border-radius: 5rem 5rem 0 5rem;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  p {
    width: 80%;
    font-size: 1.2rem;
    margin: 1rem auto;
  }
}

@media screen and (max-width: 610px) {
  #dailyEvents {
    #highrollers {
      flex-direction: column;
      gap: 2rem;
    }

    #mainTournament {
      justify-content: start;
    }

    .tournaments {
      gap: 1rem;
      > div {
        width: 15rem;
        p {
          width: 100%;
        }
      }
    }
  }
}
</style>