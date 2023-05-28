<template>
  <el-button text @click="dialogFormVisible = true" type="primary"
    >Add a new place</el-button
  >
  <el-dialog v-model="dialogFormVisible" title="Place">
    <el-form ref="placeFormRef" :model="form" :rules="rules">
      <el-form-item label="Place" :label-width="formLabelWidth" prop="place">
        <el-select required v-model="form.place" placeholder="Please select a place">
          <el-option
            v-for="{ name } in places"
            :key="name"
            :label="name"
            :value="name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
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
      <el-form-item label="Rating" :label-width="formLabelWidth" prop="rating">
        <el-select v-model="form.rating" placeholder="Please select a rating">
          <el-option
            v-for="rating in formRatings"
            :key="rating"
            :label="rating"
            :value="rating"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Review" :label-width="formLabelWidth" prop="review">
        <el-input
          v-model="form.review"
          type="textarea"
          placeholder="Please write a review"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelNewPlace">Cancel</el-button>
        <el-button type="primary" @click="confirmNewPlace">
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

const placeFormRef = ref();
const dialogFormVisible = ref(false);
const form = reactive({
  place: '',
  address: '',
  rating: '',
  review: '',
});
const rules = reactive({
  place: [
    { required: true, message: 'Please select a place', trigger: 'change' },
  ],
  address: [
    { required: true, message: 'Please select an address', trigger: 'change' },
  ],
  rating: [
    { required: true, message: 'Please select a rating', trigger: 'change' },
  ],
  review: [
    { required: true, message: 'Please input a review', trigger: 'blur' },
  ],
});

async function submitForm(formEl) {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      dialogFormVisible.value = false;
    }
  });
}

function confirmNewPlace() {
  submitForm(placeFormRef.value);
}

function cancelNewPlace() {
  dialogFormVisible.value = false;
}

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
