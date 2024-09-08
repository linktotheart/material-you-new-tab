<template>
  <div
    class="flex group flex-col transition-colors rounded-lg cursor-pointer bg-accent bg-opacity-0 py-2 px-4 hover:bg-opacity-20"
	@click="goToLink"
  >
    <div class="bg-accent rounded-full grid place-items-center p-5 self-start mx-auto mb-3">
      <img
        class="w-5 h-5 m-0 p-0 flex rounded-full"
        :src="`https://www.google.com/s2/favicons?domain=${url}`"
        alt="favicon"
      />
    </div>
    <span
      class="text-xs w-full text-center truncate text-darker group-hover:text-opacity-90 text-opacity-70"
    >
      {{ props.title }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String
});

const goToLink = () => {
  window.open(props.url, "_blank");
};
</script>

<style></style>
