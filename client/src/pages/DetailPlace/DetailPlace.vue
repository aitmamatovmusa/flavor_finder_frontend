<template>
  <div class="wrapper">
    <div class="grid-content">
      <Place :place="place" />
    </div>
    <div class="grid-content">
      <Reviews />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import instance from '@/services/api';
import Place from '@/pages/DetailPlace/Place.vue';
import Reviews from '@/pages/DetailPlace/Reviews.vue';

const route = useRoute();

const place = ref({});
async function fetchPlace(id) {
  const { data } = await instance.get(`/api/place/${id}`);
  place.value = data;
}

onMounted(() => {
  const placeId = route.params?.id;
  if (placeId) {
    fetchPlace(placeId);
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
}
.grid-content {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  background: #00000010;
}
</style>
