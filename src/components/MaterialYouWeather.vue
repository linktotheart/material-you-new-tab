<template>
  <div
    class="bg-darker bg-opacity-50 p-2 pl-8 text-white rounded-full flex items-center"
  >
    <time class="text-white text-xl font-semibold" datetime="">
      {{ formattedDate }}
    </time>
    <div
      class="flex ml-auto flex-col bg-light text-darker size-20 p-2 content-center rounded-full items-center"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span class="text-sm">25°C</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formattedDate = ref(new Date().toLocaleString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric"
      }));
</script>

<style></style>
