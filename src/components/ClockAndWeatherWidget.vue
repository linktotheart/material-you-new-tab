<template>
  <div class="flex flex-col gap-8">
    <MaterialClock />
    <MaterialYouWeather />
  </div>
</template>

<script>
import MaterialClock from "./MaterialClock.vue";
import MaterialYouWeather from "./MaterialYouWeather.vue";

export default {
  components: { MaterialClock, MaterialYouWeather }
};
</script>

<style></style>
