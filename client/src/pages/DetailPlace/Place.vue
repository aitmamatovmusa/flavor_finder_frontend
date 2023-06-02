<template>
  <div class="place">
    <h2 class="place__name">{{ place.name }}</h2>

    <div class="place__description">
      <div class="place__info">
        <div class="place__item">
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
        <div class="place__item">
          Address:
          <span> {{ place.address }} </span>
        </div>
        <div class="place__item">
          Reviews:
          <span> {{ place.num_reviews }} </span>
        </div>
        <div class="place__item">
          Average Check:
          <span> {{ place.average_price }} </span>
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
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__name {
    font-size: var(--el-font-size-extra-large);
  }
  &__link {
    display: block;
    text-align: center;
    border-radius: 50px;
    padding: 20px;
    color: white;
    background: rgb(246, 102, 7);
    transition: .2s;

    &:hover {
        opacity: .8;
    }
    &:after {
        display: none;
    }
  }
}
</style>
