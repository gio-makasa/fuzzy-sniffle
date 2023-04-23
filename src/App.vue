<template>
  <div id="modal">
    <TheBanner />
    <main>
      <h2>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h2>
      <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      <NavBar :activeTab="activeTab" @active="activateTab" />
      <component :is="activeTab"></component>
      <ThePolicies />
      <TheSimilars />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheBanner from "./components/TheBanner.vue";
import NavBar from "./components/main/NavBar.vue";
import CashGames from "./components/cashgames/CashGames.vue";
import SpringSeries from "./components/springseries/SpringSeries.vue";
import FinalStage from "./components/finalstage/FinalStage.vue";
import ThePolicies from "./components/policies/ThePolicies.vue";
import TheSimilars from "./components/similars/TheSimilars.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheBanner,
    NavBar,
    CashGames,
    SpringSeries,
    FinalStage,
    TheSimilars,
    ThePolicies,
    TheFooter,
  },
  data() {
    return {
      activeTab: "CashGames",
    };
  },
  methods: {
    activateTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style lang="scss">
:root {
  font-size: 10px;
}

body {
  background-color: #333;
}

#modal {
  position: relative;
  background-color: $backgroundColor;
  color: $textColor;
  width: 60%;
  height: fit-content;
  border-radius: 1.3rem;
  margin: auto;
  margin-top: 1rem;
  padding-bottom: 10rem;
  overflow: hidden;

  main {
    width: 90%;
    margin: auto;

    h2 {
      font-size: 1.8rem;
      margin: 2rem 0 1rem;
    }

    > p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 1200px) {
  :root {
    font-size: 7px;
  }

  #modal {
    width: 100%;
    margin-top: 0;
  }
}
</style>