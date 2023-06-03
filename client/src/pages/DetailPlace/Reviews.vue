<template>
  <div class="reviews">
    <h2 class="reviews__title">{{ place.num_reviews }} Reviews</h2>
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
  <NewComment :place="place" />
</template>

<script setup>
import {
  defineProps, watch, toRefs, ref,
} from 'vue';
import instance from '@/services/api';
import NewComment from '@/pages/DetailPlace/NewComment.vue';

const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
});

const { place } = toRefs(props);
const comments = ref([]);

async function fetchComments(id) {
  const { data } = await instance(`api/comments/${id}`);
  comments.value = data;
}

watch(place, async () => {
  fetchComments(place.value.id);
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
