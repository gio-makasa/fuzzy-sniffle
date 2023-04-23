<template>
  <div id="policies">
    <h2>წესები და პირობები</h2>
    <PolicyComp
      v-for="pol in data"
      :key="pol.question"
      :question="pol.question"
      :answer="pol.answer"
    />
  </div>
</template>

<script>
import PolicyComp from "./PolicyComp.vue";
export default {
  components: { PolicyComp },
  data() {
    return {
      data: [
        {
          question: "როდის იწყება და რა ფორმატით გაიმართება აქცია",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, perspiciatis.",
        },
        {
          question: "როგორ მივიღო აქციაში მონაწილეობა?",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, perspiciatis.",
        },
        {
          question: "სხვადასხვა",
          answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, perspiciatis.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#policies {
  margin: 3rem 0;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
}
</style>