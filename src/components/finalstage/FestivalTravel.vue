<template>
  <div id="festivalTicket">
    <div id="festivalBody">
      <img src="/assets/final-info-img.jpg" alt="festival" />
      <h3>ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!</h3>
      <h4>
        The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
        მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
      </h4>

      <div id="date">
        <p>15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
      </div>

      <div id="categories">
        <TravelCategory
          v-for="travel of travels.length"
          :key="travel"
          :travelData="travels[travel - 1]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TravelCategory from "./TravelCategory.vue";

export default {
  components: { TravelCategory },
  data() {
    return {
      travels: [
        {
          title: "A კატეგორიის საგზურში შედის",
          list: [
            {
              img: "./assets/final-item-ticket-icon.png",
              title: "ორმხრივი ავიაბილეთი",
            },
            {
              img: "./assets/final-item-event-icon.png",
              title: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
            },
            {
              img: "./assets/final-item-event-icon.png",
              title: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
            },
            {
              img: "./assets/final-item-hotel-icon.png",
              title: "სასტუმრო Golden Tulip Vivaldi Hote",
            },
            {
              img: "./assets/final-item-money-icon.png",
              title: "€500 სახარჯი ფული",
            },
          ],
        },

        {
          title: "A კატეგორიის საგზურში შედის",
          list: [
            {
              img: "./assets/final-item-ticket-icon.png",
              title: "ორმხრივი ავიაბილეთი",
            },
            {
              img: "./assets/final-item-event-icon.png",
              title: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
            },
            {
              img: "./assets/final-item-event-icon.png",
              title: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
            },
            {
              img: "./assets/final-item-hotel-icon.png",
              title: "სასტუმრო Golden Tulip Vivaldi Hote",
            },
            {
              img: "./assets/final-item-money-icon.png",
              title: "€500 სახარჯი ფული",
            },
          ],
        },

        {
          title: "A კატეგორიის საგზურში შედის",
          list: [
            {
              img: "./assets/final-item-ticket-icon.png",
              title: "ორმხრივი ავიაბილეთი",
            },
            {
              img: "./assets/final-item-event-icon.png",
              title: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
            },
            {
              img: "./assets/final-item-hotel-icon.png",
              title: "სასტუმრო",
            },
            {
              img: "./assets/final-item-money-icon.png",
              title: "€500 სახარჯი ფული",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#festivalTicket {
  position: relative;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0.2rem;

  #festivalBody {
    background-color: $backgroundDarkColor;
    padding: 1rem;
    border-radius: inherit;

    > * {
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      border-radius: inherit;
    }

    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.4rem;
      width: 90%;
      margin: auto;
    }

    #date {
      position: relative;
      text-align: left;
      background-color: $darkGrey;
      border-radius: 1.2rem;
      padding: 2rem;
      margin: 2rem auto;
      overflow: hidden;
      width: 80%;
      font-size: 1.4rem;

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

    #categories {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }
}

@media screen and (max-width: 660px) {
  #festivalTicket {
    #festivalBody {
      #date {
        width: 100%;
      }
      #categories {
        flex-direction: column;
      }
    }
  }
}
</style>