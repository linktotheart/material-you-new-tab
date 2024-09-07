<script setup lang="ts">
import MaterialClock from './components/MaterialClock.vue'
import ClockAndWeatherWidget from './components/ClockAndWeatherWidget.vue'
import { defineProps } from 'vue'
</script>

<template>
  <div class="p-8 h-dvh bg-blue-100">
    <div class="max-w-5xl mx-auto h-full grid grid-cols-1 gap-4 lg:grid-cols-3">

      <div class="flex justify-center items-center h-full border border-solid border-red-400">
        <clock-and-weather-widget />
      </div>
      <div class="flex justify-center items-center col-span-2 h-full border border-solid border-red-400">
        <h1 class="text-4xl">Hello Vite + Vue 3 + TypeScript + Tailwind CSS</h1>
      </div>
    </div>  
  </div>
</template>

<style scoped>
</style>
