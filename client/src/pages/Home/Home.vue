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
import { onMounted, ref, provide } from 'vue';
import instance from '@/services/api';
import Place from '@/pages/Home/Place.vue';
import NewPlace from '@/pages/Home/NewPlace.vue';

const places = ref([]);

async function fetchPlaces() {
  const { data } = await instance.get('/api/places');
  places.value = data;
}

provide('fetchPlaces', fetchPlaces);

onMounted(() => fetchPlaces());

</script>
