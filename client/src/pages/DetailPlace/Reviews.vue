<template>
  <div class="reviews">
    <h2 class="reviews__title">{{ numReviews }} Reviews</h2>
    <div class="reviews__wrapper">
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p class="comment__text">
          {{ comment.review }}
        </p>
        <div class="comment__item">
          <span class="comment__username">{{ comment.user_name }}</span>
          <el-rate
            disabled
            :model-value="comment.rating"
            size="small"
            disabled-void-color="#000000"
          />
        </div>
      </div>
    </div>
  </div>
  <NewComment />
</template>

<script setup>
import {
  defineProps, watch, toRefs, ref,
} from 'vue';
import instance from '@/services/api';
import NewComment from '@/pages/DetailPlace/NewComment.vue';

const props = defineProps({
  placeId: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
});

const { placeId } = toRefs(props);
const comments = ref([]);

async function fetchComments(id) {
  const { data } = await instance(`api/comments/${id}`);
  comments.value = data;
}

watch(placeId, async () => {
  fetchComments(placeId.value);
});
</script>

<style scoped lang="scss">
.reviews {
  &__wrapper {
    max-height: 65vh;
    overflow-y: auto;
  }
  &__title {
    margin-bottom: 35px;
  }
}
.comment {
  margin-bottom: 35px;
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__username {
    color: #0000007b;
  }
}
</style>
