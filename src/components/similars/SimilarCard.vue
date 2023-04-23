<template>
  <div class="card">
    <img :src="data.img" alt="cover" />
    <div class="info" :style="{ background: data.color }">
      <h4>{{ data.h }}</h4>
      <p>{{ data.p }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  min-width: 20rem;
  height: 24rem;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
  }

  .info {
    position: absolute;
    bottom: 0;
    height: 50%;
    font-size: 1.4rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>