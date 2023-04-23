<template>
  <div id="cashGames">
    <h3>1 &#8382; რეიკი = 1 ქულა</h3>
    <div id="leaderBoards">
      <h4>ჰოლდემის TOP20 ლიდერბორდი</h4>
      <LeaderBoard />
      <PrizesList />
      <h4>TOP20 ლიდერბორდი ჰოლდემში</h4>
      <LeaderBoard />
      <PrizesList />
      <p>* ლიდერბორდის შედეგები განახლდება <a href="#">პოკერის ლობიში</a></p>
    </div>
  </div>
  <InfoBox />
</template>

<style lang="scss" scoped>
#cashGames {
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

    h4 {
      position: relative;
      font-size: 1.4rem;
      margin: 1rem 0 2rem;

      &::after {
        content: "";
        background-image: url("../../assets/example-icon.png");
        background-size: 2rem;
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 1rem;
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

@media screen and (max-width: 1000px) {
  #cashGames {
    background-color: $backgroundLightColor;

    h3 {
      background-color: $darkGrey;
      border-radius: 1.6rem;
      padding: 3rem 0;
    }
    
    #leaderBoards {
      background-color: $backgroundLightColor;
    }
  }
}
</style>