<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" v-for="col in 6" :key="col">
        <el-card :shadow="'never'" :body-style="{background: '#E4E7ED', padding: '10px'}">
          <div class="card-header">
            <el-tag round effect="light">Адилет</el-tag>
            <el-tag round effect="light">Адилет</el-tag>
          </div>

          <h5 class="card-name">Cafe name</h5>

          <div class="card-info">
            <div class="card-info-item">
              Rating:
              <span>
                <el-rate disabled v-model="rating" size="small" disabled-void-color="#000000"/>
              </span>
            </div>
            <div class="card-info-item">
              Address:
              <span>
                123 Main Street
              </span>
            </div>
            <div class="card-info-item">
              Reviews:
              <span>
                38
              </span>
            </div>
          </div>

          <el-button size="large" color="#000000" class="card-btn">Watch More</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(3);
</script>

<style scoped>
.el-col {
  margin: 0px 0px 10px 0px;
}
.el-row {
  margin-bottom: -10px;
}
.card-header {
  display: flex;
  align-items: center;
}

.el-tag {
  margin: 0px 10px 0px 0px;
}

.el-tag:last-child {
  margin-right: 0;
}

.card-name {
  text-align: center;
  font-size: var(--el-font-size-extra-large);
}

.card-info {
  margin: 0px 0px 30px 0px;
}

.card-info > *:not(:last-child) {
  margin: 0px 0px 10px 0px;
}

.card-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--el-font-size-large);
  color: #909399;
}

.card-info-item span {
  color: #000000;
}

.card-btn {
  width: 100%;
}

@media (max-width: 576px) {
  .card-info-item {
    font-size: var(--el-font-size-small);
  }
}
</style>
