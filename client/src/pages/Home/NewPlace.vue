<template>
  <el-button text @click="dialogFormVisible = true" type="primary"
    >Add a new place</el-button
  >
  <el-dialog v-model="dialogFormVisible" title="Place">
    <el-form :model="form">
      <el-form-item label="Place" :label-width="formLabelWidth">
        <el-select required v-model="form.place" placeholder="Please select a place">
          <el-option
            v-for="{ name } in places"
            :key="name"
            :label="name"
            :value="name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Address" :label-width="formLabelWidth">
        <el-select
          v-model="form.address"
          placeholder="Please select an address"
        >
          <el-option
            v-for="{ address } in places"
            :key="address"
            :label="address"
            :value="address"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Rating" :label-width="formLabelWidth">
        <el-select v-model="form.rating" placeholder="Please select a rating">
          <el-option
            v-for="rating in formRatings"
            :key="rating"
            :label="rating"
            :value="rating"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Review" :label-width="formLabelWidth">
        <el-input
          v-model="form.review"
          type="textarea"
          placeholder="Please write a review"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue';

defineProps({
  places: {
    type: Array,
    required: true,
  },
});

const formLabelWidth = '140px';
const formRatings = [0, 1, 2, 3, 4, 5];

const dialogFormVisible = ref(false);
const form = reactive({
  place: '',
  address: '',
  rating: '',
  review: '',
});
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
