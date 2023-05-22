<template>
  <div>
    <el-row :gutter="10">
      <Place v-for="col in 6" :key="col"/>
    </el-row>
  </div>
</template>

<script setup>
import Place from '@/pages/Home/Place.vue';
</script>
