<template>
  <div class="container">
    <input type="text" placeholder="http:// ..." ref="QRurl" />
    <input type="file" id="background" accept="image/*" ref="IMGurl" />
    <button @click="submit()">GENERATE</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const QRurl = ref();
const IMGurl = ref();
const emit = defineEmits<{
  url: [QRurl: string, IMGurl: string];
}>();

function submit() {
  emit(
    "url",
    QRurl.value.value,
    IMGurl.value.files[0] ? URL.createObjectURL(IMGurl.value.files[0]) : null
  );
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 20vh;
  padding: 1rem;
  margin-bottom: 5vh;
  border-radius: 1rem;
  box-shadow: 0 0 10px white;

  input[type="text"] {
    border-radius: 5rem;
    padding: 0.5rem 1rem;
    font-size: large;
  }
}
</style>