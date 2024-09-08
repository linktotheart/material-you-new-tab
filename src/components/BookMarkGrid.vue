<template>
  <div class="grid grid-cols-4 gap-2 lg:grid-cols-5">
    <BookMark v-for="bookmark in myBookmarks" :key="bookmark.title" :title="bookmark.title" :url="bookmark.url" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStorage } from "./../composable/SaveToLocal";
import BookMark from "./BookMark.vue";

const bookmarks = ref([
  {
    title: "Google",
    url: "https://www.google.com",
    icon: "google"
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com",
    icon: "youtube"
  },
  {
    title: "GitHub",
    url: "https://github.com",
    icon: "github"
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    icon: "twitter"
  },
  {
    title: "Reddit",
    url: "https://www.reddit.com",
    icon: "reddit"
  },
  {
    title: "Amazon",
    url: "https://www.amazon.com",
    icon: "amazon"
  },
  {
    title: "Wikipedia",
    url: "https://www.wikipedia.org",
    icon: "wikipedia"
  },
  {
    title: "Netflix",
    url: "https://www.netflix.com",
    icon: "netflix"
  },
  {
    title: "Spotify",
    url: "https://www.spotify.com",
    icon: "spotify"
  },
  {
    title: "WhatsApp",
    url: "https://web.whatsapp.com",
    icon: "whatsapp"
  }
]);

const myBookmarks = useStorage("myBookmarks", bookmarks.value);
</script>

<style>

</style>