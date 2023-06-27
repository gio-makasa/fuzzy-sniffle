<template>
  <section>
    <h3>Tours</h3>

    <div id="tours">
      <div class="service" v-for="service of services" :key="service.name">
        <img :src="service.img" :alt="service.name" />
        <span>${{service.price}}/person</span>
        <h4>{{ service.name }}</h4>
        <p>{{service.time}}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface tour {
  img: string;
  price: number;
  name: string;
  time: string;
}

const services: tour[] = [
  {
    img: "./src/assets/tours/greece.jpg",
    price: 299,
    name: "Blue Beauty Of Greece",
    time: "5 Days / 6 Night",
  },
  {
    img: "./src/assets/tours/sataplia.jpg",
    price: 150,
    name: "sataplia",
    time: "1 Days",
  },
  {
    img: "./src/assets/tours/maldivies.jpg",
    price: 999,
    name: "Maldives Under the Sea",
    time: "1 Days / 1 Night",
  },
  {
    img: "./src/assets/tours/sevan.jpg",
    price: 100,
    name: "lake sevan",
    time: "1 Days",
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

  #tours {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    .service {
      width: 20rem;
      box-shadow: 0 0 1rem grey;
      border-radius: 1rem;
      overflow: hidden;
      text-align: center;

      img {
        height: 60%;
        width: 100%;
        margin-bottom: 1.5rem;
      }

      span {
        color: rgba(0, 0, 0, 0.8);
      }

      h4 {
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 1.2rem;
        margin: 1rem 0;
        color: orangered;
        padding: 0 0.5rem;
      }

      &:hover {
        box-shadow: 0 0 1rem black;
      }
    }
  }
}
</style>