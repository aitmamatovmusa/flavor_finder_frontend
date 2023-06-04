<template>
  <div class="wrapper">
    <el-container>
      <el-header :height="'auto'">
        <el-row :align="'middle'">
          <el-col :xs="24" :sm="12" :md="16">
            <router-link class="header-logo" to="/">Flavor Finder</router-link>
          </el-col>
          <Search />
        </el-row>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Search from '@/components/Search.vue';
</script>

<style scoped>
.wrapper {
  font-family: "helvetica", sans-serif;
}

.el-row {
  padding: 10px 0;
}

.header-logo {
  color: #000;
  text-decoration: none;
  font-size: var(--el-font-size-extra-large);
}

@media (max-width: 768px) {
  .header-logo {
    display: inline-block;
    margin: 0px 0px 10px 0px;
  }
}
</style>
