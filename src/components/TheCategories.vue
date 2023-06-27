<template>
  <section>
    <h3>categories</h3>

    <div id="categories">
      <div
        v-for="category of categories"
        :key="category.name"
        class="category"
        :style="{
          'background-image': 'url(' + category.img + ')',
        }"
      >
        {{ category.name }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface category {
  img: string;
  name: string;
}

const categories: category[] = [
  {
    img: "./src/assets/categories/mountain.jpg",
    name: "mountain",
  },
  {
    img: "./src/assets/categories/ocean.jpg",
    name: "ocean",
  },
  {
    img: "./src/assets/categories/snow.jpg",
    name: "snow",
  },
  {
    img: "./src/assets/categories/camping.jpg",
    name: "camping",
  },
  {
    img: "./src/assets/categories/island.jpg",
    name: "island",
  },
  {
    img: "./src/assets/categories/city.jpg",
    name: "city",
  },
];
</script>

<style lang="scss" scoped>
section {
  padding: 0 1rem;

  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  #categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem;
    row-gap: 3rem;

    .category {
      position: relative;
      width: 25rem;
      padding: 5.3rem 0;
      border-radius: 1rem;
      overflow: hidden;
      text-transform: uppercase;
      font-size: 3rem;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.2);
      background-size: cover;
      text-align: center;
      -webkit-background-clip: text;
      background-clip: text;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-image: inherit;
        filter: brightness(20%);
        transition: 0.5s;
      }

      &:hover {
        &::after {
          z-index: 1;
          filter: brightness(100%);
        }
      }
    }
  }
}
</style>