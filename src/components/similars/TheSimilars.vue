<template>
  <h2>მსგავსი აქციები</h2>
  <div id="row">
    <SimilarCard v-for="card in cards" :key="card.h" :data="card" />
  </div>
</template>

<script>
import SimilarCard from "./SimilarCard.vue";
export default {
  components: { SimilarCard },
  data() {
    return {
      cards: [
        {
          img: "./img/100.png",
          color: "linear-gradient(2deg, #0D649B, #0D649BE8, #0D649B00)",
          h: "Get 300% Cashback",
          p: "retrieve 300% bet amount as real money only here",
        },
        {
          img: "./src/assets/car.png",
          color: "linear-gradient(358deg, #EF541C 48%, #EF541C99, #EF541C00)",
          h: "Coming Soon",
          p: "retrieve 300% bet amount as real money only here",
        },
        {
          img: "./src/assets/pragma.png",
          color: "linear-gradient(360deg, #1A176C 55%, #1A176C99, #1A176C00)",
          h: "Win a Jackpot",
          p: "retrieve 300% bet amount as real money only here",
        },
        {
          img: "./src/assets/100.png",
          color: "linear-gradient(2deg, #0D649B, #0D649BE8, #0D649B00)",
          h: "Get 300% Cashback",
          p: "retrieve 300% bet amount as real money only here",
        },
        {
          img: "./src/assets/car.png",
          color: "linear-gradient(358deg, #EF541C 48%, #EF541C99, #EF541C00)",
          h: "Coming Soon",
          p: "retrieve 300% bet amount as real money only here",
        },
        {
          img: "./src/assets/pragma.png",
          color: "linear-gradient(360deg, #1A176C 55%, #1A176C99, #1A176C00)",
          h: "Win a Jackpot",
          p: "retrieve 300% bet amount as real money only here",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
#row {
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>