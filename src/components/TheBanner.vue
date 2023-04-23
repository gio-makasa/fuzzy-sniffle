<template>
  <div id="banner">
    <img src="/assets/banner.jpg" alt="banner" />

    <div id="head">
      <div id="dates">
        <span>სლოტები</span>
        <p>10 იანვარი - 12 მარტი</p>
      </div>

      <div id="xMark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

#head {
  position: fixed;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 0 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  z-index: 2;

  #dates {
    background-color: $backgroundLightColor;
    border-radius: 3rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: inherit;
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    }

    p {
      padding: 0 1rem;
    }
  }

  #xMark {
    background-color: $backgroundLightColor;
    border-radius: 50rem;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;

    svg {
      height: 100%;
      fill: $textColor;
    }
  }
}

@media screen and (max-width: 1200px) {
  #head {
    position: relative;

    #dates {
      background-color: transparent;
    }

    #xMark {
      display: none;
    }
  }
}
</style>