<template>
  <div class="section">
    <div
      class="search flex items-center bg-accent w-full p-2 pl-4 rounded-full focus-within:border-dark border-solid border-2"
    >
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-dark text-opacity-80 w-10 h-10"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
          />
        </svg>
      </div>
      <input
        type="text"
        v-model="search"
        class="bg-transparent focus:outline-none focus:border-0 px-4 text-lg text-gray-700"
        placeholder="What are you looking for?"
      />
      <button
        @click.stop="goToSearch"
        class="h-12 py-1 px-6 text-light rounded-full grid place-content-center bg-dark hover:bg-darker"
      >
        Search
      </button>
    </div>
    <!-- search engines -->
    <div class="flex gap-4 px-4 items-center justify-center mt-4">
      <p class="text-sm text-darker">Search with</p>
      <label
        class="inline-flex border-2 border-solid items-center gap-x-1.5 bg-opacity-90 transition-colors hover:bg-opacity-95 cursor-pointer py-1.5 px-3 rounded-full text-sm font-medium bg-accent text-dark"
		:class="{'border-dark bg-opacity-100': selected === search.url }"
        v-for="search in searchEngine"
        :key="search.label"
      >
        {{ search.label }}
        <input
          type="radio"
          name="searchEngine"
          :value="search.url"
          v-model="selected"
          class="hidden"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref("");
const searchEngine = ref([
  { label: "Google", url: "https://www.google.com/search?q=" },
  { label: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
//   { label: "Bing", url: "https://bing.com/?q=" },
  { label: "YouTube", url: "https://www.youtube.com/results?search_query=" }
]);
const selected = ref("https://www.google.com/search?q=");


const goToSearch = () => {
  if (search.value) {
	window.open(selected.value + search.value, "_blank");
  }
};
</script>

<style></style>
