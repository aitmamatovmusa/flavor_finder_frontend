<template>
  <el-button
    class="comment-btn"
    @click="dialogFormVisible = true"
    type="primary"
    round
  >
    Add a new comment
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Comment">
    <el-form ref="commentFormRef" :model="form" method="post" :rules="rules">
      <el-form-item
        label="Username"
        :label-width="formLabelWidth"
        prop="username"
      >
        <el-input
          name="username"
          v-model="form.username"
          placeholder="Please enter your username"
        />
      </el-form-item>
      <el-form-item label="Rating" :label-width="formLabelWidth" prop="rating">
        <el-select
          name="rating"
          v-model="form.rating"
          placeholder="Please select your rating"
        >
          <el-option
            v-for="rating in ratingValues"
            :key="rating"
            :label="rating"
            :value="rating"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Review" :label-width="formLabelWidth" prop="review">
        <el-input
          name="review"
          v-model="form.review"
          placeholder="Please enter your review"
          type="textarea"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelNewComment(commentFormRef)">Cancel</el-button>
        <el-button type="primary" @click="confirmNewComment">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  ref, reactive, defineProps, toRefs, inject,
} from 'vue';
import instance from '@/services/api';

const fetchPlace = inject('fetchPlace');

const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
});

const { place } = toRefs(props);

const formLabelWidth = '140px';
const ratingValues = [1, 2, 3, 4, 5];
const commentFormRef = ref();
const dialogFormVisible = ref(false);
const form = reactive({
  username: '',
  review: '',
  rating: '',
});
const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please enter your username',
      trigger: 'change',
    },
  ],
  review: [
    { required: true, message: 'Please enter your review', trigger: 'change' },
  ],
  rating: [
    { required: true, message: 'Please select your rating', trigger: 'change' },
  ],
});

function resetForm(formEl) {
  if (!formEl) return;
  formEl.resetFields();
}

async function submitForm(formEl) {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        const reviewDetails = {
          user_name: form.username,
          review: form.review,
          rating: form.rating,
          address: place.value.address,
          place: place.value.id,
        };

        await instance.post('api/comments/', reviewDetails);

        fetchPlace(place.value.id);
        resetForm(formEl);
      } finally {
        dialogFormVisible.value = false;
      }
    }
  });
}

function confirmNewComment() {
  submitForm(commentFormRef.value);
}

function cancelNewComment(formEl) {
  resetForm(formEl);
  dialogFormVisible.value = false;
}
</script>

<style scoped lang="scss">
.comment-btn {
  position: absolute;
  bottom: 60px;
  right: 50px;
}
</style>
