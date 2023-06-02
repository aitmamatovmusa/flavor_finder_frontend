<template>
    <div class="reviews">
        <h2 class="reviews__title">{{ numReviews }} Reviews</h2>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  placeId: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.reviews {
    &__title {
        margin-bottom: 50px;
    }
}
</style>
