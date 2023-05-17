<script setup>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';

const searchValue = ref('');
</script>

<template>
  <div class="wrapper">
    <el-container>
      <el-header :height="'auto'">
        <el-row :align="'middle'">
          <el-col :xs="24" :sm="12" :md="16">
            <span class="header-logo">FoodSearch</span>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <el-input
              v-model="searchValue"
              size="large" :prefix-icon="Search"
              placeholder="Search..."
            />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.wrapper {
  font-family: "helvetica", sans-serif;
}

.el-row {
  padding: 10px 0;
}

.header-logo {
  font-size: var(--el-font-size-extra-large);
}

@media (max-width: 768px) {
  .header-logo {
    display: inline-block;
    margin: 0px 0px 10px 0px;
  }
}
</style>
