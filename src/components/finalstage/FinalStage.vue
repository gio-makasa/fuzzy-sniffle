<template>
  <FestivalTravel />
  <TravelTicket />
  <MysteryKey />
</template>

<script>
import FestivalTravel from "./FestivalTravel.vue";
import TravelTicket from "./TravelTicket.vue";
import MysteryKey from "./MysteryKey.vue";

export default {
  components: { FestivalTravel, TravelTicket, MysteryKey },
};
</script>