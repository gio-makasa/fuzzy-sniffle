<template>
  <div class="table">
    <div class="head">
      <p>ადგილი</p>
      <p>ვაუჩერი</p>
      <p>პრიზი</p>
    </div>
    <div class="body">
      <div class="rating" v-for="info in data.length" :key="info">
        <p>{{ info }}</p>
        <p>
          {{ data[info - 1].voucher || "--" }}
          <span v-if="data[info - 1].voucher">&#8382;</span>
        </p>
        <p>{{ data[info - 1].prize }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { voucher: null, prize: "A კატეგორიის საგზური" },
        { voucher: null, prize: "B კატეგორიის საგზური" },
        { voucher: 1500, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 1200, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 1000, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
        { voucher: 800, prize: "სპეც. ტურნირის ბილეთი" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  background-color: $backgroundLightColor;
  border-radius: 1.6rem;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  margin-bottom: 3rem;

  .head {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.7);
    padding: 2rem 10rem 2rem 1rem;

    p:nth-child(2) {
      position: relative;
      left: -2rem;

      &::before {
        display: block;
        position: absolute;
        content: "";
        background-image: url("./src/assets/final-item-ticket-icon.png");
        background-size: 2rem;
        width: 2rem;
        height: 2rem;
        right: 100%;
        transform: translateX(-50%);
      }
    }
  }

  .body {
    height: 40rem;
    overflow-y: scroll;

    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $lightBlack;
      font-weight: bolder;
      border-radius: 7rem;
      border: 0.2rem solid $darkGrey;
      padding: 1rem 2rem;
      margin-bottom: 0.5rem;

      p {
        position: relative;
      }

      p:nth-child(1) {
        background-color: $darkGrey;
        filter: drop-shadow(0 0 0.5rem $darkGrey);
        padding: 0.5rem 1rem;
        border-radius: 50%;
      }
    }

    .rating:nth-child(1),
    .rating:nth-child(2) {
      p:nth-child(3)::before {
        display: block;
        position: absolute;
        content: "";
        background-size: 2rem;
        width: 2rem;
        height: 2rem;
        right: 100%;
        transform: translateX(-20%);
      }
    }

    .rating:nth-child(1) {
      p:nth-child(3)::before {
        background-image: url("./src/assets/travel-icon-sm.png");
      }
    }
    .rating:nth-child(2) {
      p:nth-child(3)::before {
        background-image: url("./src/assets/ticket-icon-sm.png");
      }
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(44, 50, 52, 0.5);
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      background: $buttonBackColor;
      border-radius: 0.2rem;
    }
  }
}
</style>