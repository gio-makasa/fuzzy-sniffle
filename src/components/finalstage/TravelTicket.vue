<template>
  <div id="travelTicket">
    <h3>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</h3>
    <div id="travelBody">
      <div id="tickets">
        <div class="ticket" id="ticket1">
          <img src="/assets/poker-item-1-ticket-icon.png" alt="ticket" />
          <h3>"Cashgame Highrollers" -</h3>
          <p>1 საგზური</p>
        </div>

        <div class="ticket" id="ticket2">
          <img src="/assets/poker-item-1-ticket-icon.png" alt="ticket" />
          <h3>„Cashgame Grinders”</h3>
          <p>1 საგზური</p>
        </div>

        <div class="ticket" id="ticket3">
          <img src="/assets/poker-item-1-ticket-icon.png" alt="ticket" />
          <h3>„Tournament Sharks“ -</h3>
          <p>1 საგზური</p>
        </div>

        <div class="ticket" id="ticket4">
          <img src="/assets/poker-item-2-ticket-icon.png" alt="ticket" />
          <h3>„The Festival in Malta, GTD“</h3>
          <p>A კატეგორიის 1 საგზური</p>
          <p>B კატეგორიის 1 საგზური</p>
          <p>
            ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
            ბაი-ინის გადახდით.
          </p>
        </div>

        <div class="ticket" id="ticket5">
          <img src="/assets/poker-item-2-ticket-icon.png" alt="ticket" />
          <h3>„The Lord of the Rings“</h3>
          <p>C კატეგორიის 1 საგზური</p>
          <p>
            ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
            ბაი-ინის გადახდით.
          </p>
        </div>
      </div>
      <p>
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
        ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
      </p>
      <p>
        *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
        ბაი-ინის გადახდით.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#travelTicket {
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
    font-size: 1.8rem;
    padding: 2rem 0;
  }

  #travelBody {
    background-color: $backgroundDarkColor;
    padding: 1rem;
    border-radius: 0 0 1.6rem 1.6rem;

    #tickets {
      display: grid;
      grid-template-areas:
        "ticket1 ticket4"
        "ticket1 ticket4"
        "ticket2 ticket4"
        "ticket2 ticket5"
        "ticket3 ticket5"
        "ticket3 ticket5";
      grid-template-columns: 50% 50%;
      gap: 1rem;
      padding: 1rem;

      .ticket {
        position: relative;
        text-align: left;
        border-radius: 1.2rem;
        background-color: $lightBlack;
        padding: 2rem;

        img {
          position: absolute;
          top: 0;
          right: 1rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
      #ticket1 {
        grid-area: ticket1;
      }

      #ticket2 {
        grid-area: ticket2;
      }

      #ticket3 {
        grid-area: ticket3;
      }

      #ticket4 {
        grid-area: ticket4;
      }

      #ticket5 {
        grid-area: ticket5;
      }
    }

    > p {
      width: 80%;
      font-size: 1.3rem;
      margin: 1rem auto;
    }
  }
}

@media screen and (max-width: 550px) {
  #travelTicket {
    #travelBody {
      #tickets {
        display: grid;
        grid-template-areas:
          "ticket1"
          "ticket2"
          "ticket3"
          "ticket4"
          "ticket5";
        grid-template-columns: 100%;
        gap: 1rem;
        padding: 1rem;
      }
    }
  }
}
</style>