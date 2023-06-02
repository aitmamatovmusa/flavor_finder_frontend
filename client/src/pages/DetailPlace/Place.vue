<template>
  <div class="place">
    <h2 class="place__name">{{ place.name }}</h2>

    <div class="place__description">
      <div class="place__info">
        <div class="place__item">
          <span class="place__item-text">Rating:</span>
          <el-rate
            disabled
            :model-value="place.rating"
            size="small"
            disabled-void-color="#000000"
          />
        </div>
        <div class="place__item">
          <span class="place__item-text">Address:</span>
          <span class="place__item-value"> {{ place.address }} </span>
        </div>
        <div class="place__item">
          <span class="place__item-text">Reviews:</span>
          <span class="place__item-value"> {{ place.num_reviews }} </span>
        </div>
        <div class="place__item">
          <span class="place__item-text">Average Check:</span>
          <span class="place__item-value"> {{ place.average_price }} </span>
        </div>
      </div>
      <el-link
        class="place__link"
        type="default"
        :href="place.map_link"
        target="_blank"
      >
        Eat Here 2GIS
      </el-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  place: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.place {
  &__description {
    min-height: 63vh;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__name {
    margin-bottom: 50px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
    &-text {
      color: #00000056;
    }
    &-value {
      color: #00000091;
    }
  }
  &__link {
    display: block;
    text-align: center;
    border-radius: 50px;
    padding: 20px;
    color: white;
    background: rgb(246, 102, 7);
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
    &:after {
      display: none;
    }
  }
}
</style>
