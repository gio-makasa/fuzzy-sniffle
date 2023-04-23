<template>
  <div class="list">
    <div class="prize" v-for="prize in prizes.length" :key="prize">
      <img :src="prizes[prize - 1].img" alt="logo" />
      <h4>{{ prizes[prize - 1].title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prizes: [
        {
          img: "./src/assets/travel-icon-sm.png",
          title: "The Festival in Malta-ს საგზური",
        },
        {
          img: "./src/assets/ticket-icon-sm.png",
          title:
            "სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური",
        },
        {
          img: "./src/assets/final-item-ticket-icon.png",
          title: "ტექნიკის მაღაზიის ვაუჩერი",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background-color: $backgroundLightColor;
  border-radius: 1.6rem;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  margin-bottom: 3rem;

  .prize {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    background-color: $prizeBlack;
    border-radius: 1.2rem;
    padding: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
      width: 3rem;
      margin: 0 1rem;
    }

    h4 {
      font-weight: normal;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: $activeButton;
      border-radius: 0 0.4rem 0.4rem 0;
      width: 0.4rem;
      height: 70%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 0 0 0.5rem $activeButton;
    }
  }
}
</style>