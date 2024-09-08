<template>
  <div
    class="bg-darker bg-opacity-50 p-2 pl-8 text-white rounded-full flex items-center"
  >	
	<div class="flex flex-col">
		<time class="text-white text-xl font-semibold" datetime="">
		  {{ formattedDate }}
		</time>
		<div class="flex items-center gap-2">
			<span class="text-sm">{{ location }} </span> | <span class="text-sm">{{ condition }}</span>
		</div>
	</div>
    <div
      class="flex ml-auto flex-col bg-light text-darker size-20 p-2 pt-0 content-center rounded-full items-center"
    >
      <img :src="icon" alt="*" class="size-12 filter brightness-100" />
      <span class="text-sm font-medium">{{ temperature }} °C</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const formattedDate = ref(
  new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  })
);

const temperature = ref(0);
const location = ref("-");
const condition = ref("...");
const icon = ref("");

const API_KEY = "c8ec5c78e09448f6bce75309220907";

onMounted(async () => {
  const data = await fetchGeoLocation();
  await fetchWeather(data, API_KEY);
});

const fetchGeoLocation = async () => {
  const response = await fetch("https://geolocation-db.com/json/");
  const data = await response.json();
  return data;
};

const fetchWeather = async (locationData, apiKey) => {
  const { latitude, longitude } = locationData;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`
  );
  const data = await response.json();
  if (data.error) {
	console.error(data.error.message);
	return;
  }
  temperature.value = Math.floor(data.current.temp_c);
  location.value = data.location.name;
  condition.value = data.current.condition.text;
  icon.value = data.current.condition.icon;
};
</script>
