<template>
  <nav>
    <div
      class="button"
      :class="{ active: activeTab === 'CashGames' }"
      @click="activateTab('CashGames')"
    >
      <p>1 - 29 აპრილი</p>
      <h3>Cash Games</h3>
    </div>
    <div
      class="button"
      :class="{ active: activeTab === 'SpringSeries' }"
      @click="activateTab('SpringSeries')"
    >
      <p>13 - 29 აპრილი</p>
      <h3>Spring Series</h3>
    </div>
    <div
      class="button"
      :class="{ active: activeTab === 'FinalStage' }"
      @click="activateTab('FinalStage')"
    >
      <p>30 აპრილი</p>
      <h3>Final Stage</h3>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["activeTab"],
  emits: ["active"],
  methods: {
    activateTab(tabName) {
      this.$emit("active", tabName);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: $darkGrey;
  border-radius: 1.2rem;
  margin: 3rem 0 2rem;

  .button {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 1.3rem 10%;
    cursor: pointer;

    p {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.7rem;
      font-weight: 400;
    }
  }

  .active {
    color: white;
    background-color: $activeButton;
    border-radius: inherit;
    transform: scale(1.1);
  }
}

@media screen and (max-width: 570px) {
  nav {
    .button {
      padding: 1.3rem 5%;
    }
  }
}
</style>