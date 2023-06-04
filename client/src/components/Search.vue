<template>
  <el-col :xs="24" :sm="12" :md="8">
    <el-input
      v-model="searchValue"
      size="large"
      :prefix-icon="Search"
      placeholder="Search..."
    />
  </el-col>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { ref, watch } from 'vue';
import debounce from 'lodash.debounce';
import { useRouter } from 'vue-router';

const router = useRouter();

const searchValue = ref('');

watch(searchValue, debounce(() => {
  router.push({ query: { search: searchValue.value } });
}, 500));
</script>
