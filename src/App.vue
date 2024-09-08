<script setup>
import ClockAndWeatherWidget from './components/ClockAndWeatherWidget.vue'
import GoogleSearchBookmarks from './components/GoogleSearchBookmarks.vue'
</script>

<template>
  <div class="p-8 h-dvh bg-light">
    <div class="max-w-5xl mx-auto h-full grid grid-cols-1 gap-4 lg:grid-cols-3">

      <div class="flex justify-center items-center h-full border border-solid border-red-400">
        <clock-and-weather-widget />
      </div>
      <div class="flex justify-center items-center col-span-2 h-full border border-solid border-red-400">
        <google-search-bookmarks />
      </div>
    </div>  
  </div>
</template>

<style scoped>
</style>
