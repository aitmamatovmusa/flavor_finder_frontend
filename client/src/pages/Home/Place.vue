<template>
  <el-col :xs="24" :sm="12" :md="8">
    <el-card
      :shadow="'never'"
      :body-style="{ background: '#E4E7ED', padding: '10px' }"
    >
      <h5 class="card-name">{{ title }}</h5>

      <div class="card-info">
        <div class="card-info-item">
          Rating:
          <span>
            <el-rate
              disabled
              :model-value="rating"
              size="small"
              disabled-void-color="#000000"
            />
          </span>
        </div>
        <div class="card-info-item">
          Address:
          <span> {{ address }} </span>
        </div>
        <div class="card-info-item">
          Reviews:
          <span> {{ numReviews }} </span>
        </div>
      </div>

      <el-button size="large" color="#000000" class="card-btn"
        >Watch More</el-button
      >
    </el-card>
  </el-col>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  numReviews: {
    type: Number,
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

.card-btn {
  width: 100%;
}

@media (max-width: 576px) {
  .card-info-item {
    font-size: var(--el-font-size-small);
  }
}
</style>
