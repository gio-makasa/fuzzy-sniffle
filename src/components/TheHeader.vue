<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <nav>
      <a>categories</a>
      <a>services</a>
      <a>tours</a>
      <a>popular</a>
    </nav>
    <button>Log In</button>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  img {
    height: 100%;
  }

  nav {
    display: flex;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      border-left: 0.1rem solid black;
      padding: 0 1.5rem;
      transform: skewX(-10deg);
      font-size: 1.1rem;

      &:last-child {
        border-right: 0.1rem solid black;
      }

      &:hover {
        border-bottom: orangered 0.5rem solid;
      }
    }
  }

  button {
    background-color: orangered;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.5rem;
  }
}
</style>