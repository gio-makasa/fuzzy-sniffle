<template>
  <div class="container" @click="toggleAnswer">
    <div class="head">
      <h3>{{ question }}</h3>
      <img
        src="/assets/arrow.svg"
        alt="arrow"
        :class="{ upDown: shown }"
      />
    </div>
    <p v-if="shown">{{ answer }}</p>
  </div>
</template>

<script>
export default {
  props: ["question", "answer"],
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.shown = !this.shown;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: $backgroundLightColor;
  border-radius: 0.8rem;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .upDown {
      transform: rotateX(180deg);
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
}
</style>