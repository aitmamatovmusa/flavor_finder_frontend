<template>
  <div>
    Detail
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import instance from '@/services/api';
import { useRoute } from 'vue-router';

const route = useRoute();

const place = ref();
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

</style>
