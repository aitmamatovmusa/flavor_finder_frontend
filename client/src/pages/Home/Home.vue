<template>
  <div>
    <el-row :gutter="10">
      <Place
        :rating="5"
        :numReviews="38"
        title="Cafe name"
        address="123 Main Street"
      />
    </el-row>
  </div>
</template>

<script setup>
import Place from '@/pages/Home/Place.vue';
import { onMounted } from 'vue';
import instance from '@/services/api';

async function getPlaces() {
  const result = await instance.get('/api/places');
}

onMounted(() => getPlaces());

</script>
