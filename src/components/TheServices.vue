<template>
  <section>
    <h3>Services</h3>

    <div id="services">
      <div class="service" v-for="service of services" :key="service.name">
        <img :src="service.img" :alt="service.name" />
        <h4>{{ service.name }}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          obcaecati voluptas eaque qui maiores ducimus.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface service {
  img: string;
  name: string;
}

const services: service[] = [
  {
    img: "./src/assets/services/plane.jpg",
    name: "flight booking",
  },
  {
    img: "./src/assets/services/resort.jpg",
    name: "HOTEL & RESORT BOOKING",
  },
  {
    img: "./src/assets/services/family.jpg",
    name: "FAMILY TRIP PLANNER",
  },
  {
    img: "./src/assets/services/crouse.jpg",
    name: "CRUISE TOUR",
  },
  {
    img: "./src/assets/services/camp.jpg",
    name: "FIRE CAMP",
  },
  {
    img: "./src/assets/services/corporate.jpg",
    name: "CORPORATE HOLIDAYS",
  },
  {
    img: "./src/assets/services/horses.jpg",
    name: "horse riding",
  },
  {
    img: "./src/assets/services/hiking.jpg",
    name: "hiking",
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

  #services {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem;
    row-gap: 3rem;

    .service {
      width: 20rem;
      box-shadow: 0 0 1rem grey;
      border-radius: 1rem;
      overflow: hidden;

      img {
        height: 60%;
        width: 100%;
      }

      h4 {
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 1.3rem;
        margin: 0.5rem 0;
        text-shadow: 0 0 0 black;
        padding: 0 0.5rem;
      }

      p {
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.8);
      }

      &:hover{
        box-shadow: 0 0 1rem black;
      }
    }
  }
}
</style>