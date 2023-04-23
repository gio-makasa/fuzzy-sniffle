<template>
  <TheSatelites />

  <div id="topLeaderboard">
    <h3>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ</h3>
    <div id="leaderBoards">
      <div id="pointClaim">
        <p>ქულების დაგროვების მექანიკა</p>
        <img src="/assets/mechanic-icon.png" alt="arrow" />
      </div>
      <LeaderBoard />
      <PrizesList />
      <p>* ლიდერბორდის შედეგები განახლდება <a href="#">პოკერის ლობიში</a></p>
      <p>
        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
        სატელიტები
      </p>
    </div>
  </div>

  <DailyEvents />

  <InfoBox />
</template>

<script>
import TheSatelites from "./TheSatelites.vue";
import DailyEvents from "./DailyEvents.vue";

export default {
  components: { TheSatelites, DailyEvents },
};
</script>

<style lang="scss" scoped>
#topLeaderboard {
  position: relative;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0.2rem;

  &::after {
    position: absolute;
    content: "";
    background-color: $buttonBackColor;
    width: 30%;
    height: 0.5rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 0 1rem 0.1rem $buttonBackColor;
  }

  h3 {
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  #leaderBoards {
    text-align: center;
    background-color: $backgroundDarkColor;
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 1rem 1.5rem;

    #pointClaim {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 45%;
      background-color: $lightBlack;
      border-radius: 7rem;
      border: 0.2rem solid $darkGrey;
      margin: 0.5rem auto 2rem;

      p {
        padding-left: 2rem;
      }
    }
  }

  p {
    font-size: 1.3rem;

    a {
      color: $activeButton;
    }
  }
}

@media screen and (max-width: 610px) {
  #topLeaderboard {
    #leaderBoards {
      #pointClaim {
        width: 80%;
      }
    }
  }
}
</style>