<template>
  <div>
    <el-row :gutter="10">
      <Place
        v-for="place in places"
        :key="place.id"
        :place="place"
      />
    </el-row>
    <NewPlace />
  </div>
</template>

<script setup>
import {
  watch, onMounted, ref, provide,
} from 'vue';
import instance from '@/services/api';
import Place from '@/pages/Home/Place.vue';
import NewPlace from '@/pages/Home/NewPlace.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const places = ref([]);

async function fetchPlaces(searchQuery = '') {
  const url = `/api/places${searchQuery && `?search=${searchQuery}`}`;
  const { data } = await instance.get(url);
  places.value = data?.places;
}

provide('fetchPlaces', fetchPlaces);

onMounted(() => {
  const searchValue = router.currentRoute.value.query?.search;
  fetchPlaces(searchValue);
});

watch(router.currentRoute, () => {
  const searchQuery = router.currentRoute.value.query?.search;
  fetchPlaces(searchQuery);
});

</script>
