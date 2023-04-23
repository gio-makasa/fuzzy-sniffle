<template>
  <div>
    <h3>
      ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
      ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
    </h3>
    <p>
      * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
    </p>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  background-color: $darkGrey;
  border-radius: 1.6rem;
  text-align: center;
  padding: 2rem 8rem;
  overflow: hidden;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

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
}
</style>