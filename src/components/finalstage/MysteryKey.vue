<template>
  <div id="mysteryKey">
    <h3>მისტიური გასაღები</h3>
    <div id="mysteryBody">
      <h4>
        მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
        საიდუმლო გასაღებს
      </h4>
      <div class="table">
        <div class="body">
          <div class="rating" v-for="info in data.length" :key="info">
            <p>{{ info }}</p>
            <p>
              {{ data[info - 1] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Tournament Sharks II ადგილი",
        "სპეც. ტურნირი Tournament Sharks III ადგილი",
        "Holdem Grinders ლიდერბორდის გამარჯვებული",
        "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Tournament Sharks II ადგილი",
        "სპეც. ტურნირი Tournament Sharks III ადგილი",
        "Holdem Grinders ლიდერბორდის გამარჯვებული",
        "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
#mysteryKey {
  position: relative;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0.2rem;

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
    font-size: 2.5rem;
    padding: 2rem 0;
  }

  #mysteryBody {
    background-color: $backgroundDarkColor;
    padding: 1rem;
    border-radius: 0 0 1.6rem 1.6rem;

    h4 {
      font-size: 1.4rem;
      padding: 1rem 0 2rem;
    }

    .table {
      width: 100%;
      background-color: $backgroundLightColor;
      border-radius: 1.6rem;
      padding: 1rem 3rem;
      font-size: 1.4rem;

      .body {
        height: 35rem;
        overflow-y: scroll;

        .rating {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background-color: $lightBlack;
          font-weight: bolder;
          border-radius: 7rem;
          border: 0.2rem solid $darkGrey;
          padding: 1rem;
          margin-bottom: 0.5rem;
          font-weight: 400;

          p:nth-child(1) {
            background-color: $darkGrey;
            filter: drop-shadow(0 0 0.5rem $darkGrey);
            padding: 0.5rem 1rem;
            border-radius: 50%;
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
  }
}

@media screen and (max-width: 1000px) {
  #mysteryKey {
    background-color: $backgroundLightColor;

    h3 {
      background-color: $darkGrey;
      border-radius: 1.6rem;
      padding: 3rem 0;
    }
    
    #mysteryBody {
      background-color: $backgroundLightColor;

      h4{
        display: none;
      }
    }
  }
}
</style>