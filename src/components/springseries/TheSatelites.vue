<template>
  <div id="satelites">
    <h3>ტურნირები და სატელიტები</h3>
    <div id="satelitesBody">
      <h4>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h4>
      <div id="sateliteDates">
        <img src="/assets/clock-regular.svg" alt="clock" />
        <p>19:00 / 19:30 / 20:00</p>
      </div>
      <div id="sateliteImages">
        <img src="/assets/promo-left-img.png" alt="promo" />
        <img src="/assets/promo-right-img.png" alt="promo" />
      </div>
      <div id="sateliteText">
        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან</p>
        <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
        <button>პოკერის ლობი</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#satelites {
  position: relative;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0.2rem;
  overflow: hidden;

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
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  #satelitesBody {
    position: relative;
    background: $backgroundDarkColor;
    border-radius: 0 0 1.6rem 1.6rem;
    padding-top: 1rem;

    h4 {
      font-size: 1.6rem;
    }

    #sateliteDates {
      position: relative;
      display: flex;
      align-items: center;
      border: 0.3rem solid $activeButton;
      border-radius: 0.8rem;
      width: fit-content;
      margin: 2rem auto;
      white-space: nowrap;
      box-shadow: 0 0 0.8rem $activeButton inset, 0 0 1rem $activeButton;
      overflow: hidden;

      img {
        width: 3.5rem;
        height: 3.4rem;
        padding: 0.7rem;
        z-index: 1;
      }
      &::after {
        border-radius: 5rem;
        content: "";
        position: absolute;
        background-color: $activeButton;
        width: 7rem;
        height: 7rem;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;
        padding: 0.7rem 1rem;
      }
    }

    #sateliteImages {
      display: flex;
      justify-content: space-between;
      width: 100%;

      img {
        width: 25%;
      }
    }

    #sateliteText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 60%;

      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.3rem;
        margin: 0 auto 2.5rem;
      }

      button {
        display: block;
        background-color: $buttonBackColor;
        color: $textColor;
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 0.3rem;
        margin: 1rem auto;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  #satelites {
    #satelitesBody {
      #sateliteImages {
        position: relative;
        height: 5rem;

        img {
          position: absolute;
          bottom: 0;

          &:nth-child(2) {
            right: 0;
          }
        }
      }
      #sateliteText {
        position: relative;
        width: 100%;
        padding: 1rem 0;
        background-color: $darkGrey;
      }
    }
  }
}
</style>