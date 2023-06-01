<template>
  <el-col :xs="24" :sm="12" :md="8">
    <el-card
      :shadow="'never'"
      :body-style="{ background: '#E4E7ED', padding: '10px' }"
    >
      <h5 class="card-name">{{ place.name }}</h5>

      <div class="card-info">
        <div class="card-info-item">
          Rating:
          <span>
            <el-rate
              disabled
              :model-value="place.rating"
              size="small"
              disabled-void-color="#000000"
            />
          </span>
        </div>
        <div class="card-info-item">
          Address:
          <span> {{ place.address }} </span>
        </div>
        <div class="card-info-item">
          Reviews:
          <span> {{ place.num_reviews }} </span>
        </div>
      </div>
      <router-link class="card-link" :to="`place/${place.id}`" target="_blank">
        Watch More
      </router-link>
    </el-card>
  </el-col>
</template>

<script setup>
defineProps({
  place: {
    type: Object,
    required: true,
  },
});
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

.card-link {
  text-decoration: none;
  display: block;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  background-color: #000;
}

@media (max-width: 576px) {
  .card-info-item {
    font-size: var(--el-font-size-small);
  }
}
</style>
