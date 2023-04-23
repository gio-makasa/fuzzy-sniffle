<template>
  <footer>
    <button>ითამაშე</button>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  background-color: $backgroundDarkColor;
  border-top: 0.3rem solid $buttonBackColor;
  width: inherit;
  padding: 1.5rem 0;

  button {
    display: block;
    background-color: $buttonBackColor;
    color: $textColor;
    padding: 0.8rem 4rem;
    border: none;
    border-radius: 0.3rem;
    margin: auto;
    cursor: pointer;
  }
}
</style>