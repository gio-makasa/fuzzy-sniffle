<template>
  <div class="travelCategory">
    <h3>{{ travelData.title }}</h3>
    <div class="travelCategoryBody">
      <div class="item" v-for="item in travelData.list" :key="item.title">
        <img :src="item.img" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["travelData"],
};
</script>

<style lang="scss" scoped>
.travelCategory {
  position: relative;
  width: 33%;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  margin-bottom: 2rem;
  overflow: hidden;
  text-align: left;

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
    text-align: center;
    font-size: 1.5rem;
    padding: 1.5rem 1rem;
  }

  .travelCategoryBody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    padding: 1rem;
    background-color: $backgroundLightColor;

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: $backgroundColor;
      border-radius: 1rem;
      padding: 1rem;
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width: 660px) {
  .travelCategory {
    width: 100%;
  }
}
</style>