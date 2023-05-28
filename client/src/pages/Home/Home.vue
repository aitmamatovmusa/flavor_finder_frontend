<template>
  <div>
    <el-row :gutter="10">
      <Place
        v-for="place in places"
        :key="place.title"
        :rating="place.rating"
        :numReviews="place.num_reviews"
        :title="place.name"
        :address="place.address"
      />
    </el-row>
    <NewPlace :places="places" />
  </div>
</template>

<script setup>
import Place from '@/pages/Home/Place.vue';
import { onMounted, ref } from 'vue';
import instance from '@/services/api';
import NewPlace from '@/pages/Home/NewPlace.vue';

const places = ref([]);

async function getPlaces() {
  const { data } = await instance.get('/api/places');
  places.value = data;
}

onMounted(() => getPlaces());

</script>
