<template>
  <div class="slideshow-container">
    <div
      class="mySlides fade"
      :class="{ visible: slideIndex == i }"
      v-for="i of images.length"
      :key="i"
    >
      <img :src="images[i - 1]" />
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>

    <div class="dots">
      <span
        class="dot"
        :class="{ active: slideIndex == i }"
        @click="currentSlide(i)"
        v-for="i of images.length"
        :key="i"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let slideIndex = ref(1);
const images: string[] = [
  "./src/assets/slides/turistas.png",
  "./src/assets/slides/cruise.jpg",
  "./src/assets/slides/mountain.jpg",
  "./src/assets/slides/beach.jpeg",
];

function plusSlides(n: number) {
  slideIndex.value += n;
  slideIndex.value > images.length
    ? (slideIndex.value = 1)
    : slideIndex.value < 1
    ? (slideIndex.value = images.length)
    : slideIndex.value;
}

function currentSlide(n: number) {
  slideIndex.value = n;
}
</script>

<style lang="scss" scoped>
.slideshow-container {
  position: relative;

  .mySlides {
    display: none;
  }

  div[class~="visible"] {
    display: block;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;

    img {
      object-fit: cover;
      object-position: center;
      height: 70vh;
      width: 100%;
    }
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    padding: 1rem;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover{
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .prev {
    left: 0;
    border-radius: 0 3px 3px 0;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1rem;

    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: grey;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;

      &:hover {
        background-color: var(--main-yellow);
      }
    }

    .active {
      background-color: var(--main-red);
    }
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 300px) {
  .prev,
  .next {
    font-size: 11px;
  }
}
</style>