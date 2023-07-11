<template>
  <h1>QR Code Generator</h1>
  <InputContainer @url="getData" />
  <div id="result" ref="result">
    <img :src="image" alt="background" id="background" />
    <img
      :src="
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qr
      "
      alt="image"
      id="qr"
    />
  </div>
  <button @click="download">DOWNLOAD</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import domtoimage from "dom-to-image-more";
import InputContainer from "./components/InputContainer.vue";

const result = ref();
const qr = ref("https://gio-makasa.github.io");
const image = ref("./src/assets/back.jpg");

function getData(QRurl: string, IMGurl: string) {
  if (QRurl != "") {
    qr.value = QRurl;
  }
  image.value = IMGurl;
}

function download() {
  domtoimage
    .toJpeg(result.value, { quality: 0.95 })
    .then(function (dataUrl: any) {
      let link = document.createElement("a");
      link.download = "QR.jpeg";
      link.href = dataUrl;
      link.click();
    });
}
</script>

<style lang="scss" scoped>
#result {
  position: relative;
  width: 300px;
  height: 300px;
  text-align: center;

  #background {
    width: 100%;
    height: 100%;
  }

  #qr {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }
}
button {
  margin-top: 1rem;
}
</style>