<template>
  <el-button click="dialogFormVisible = true" type="primary">
    Add a new place
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Place">
    <el-form ref="placeFormRef" :model="form" method="post" :rules="rules">
      <el-form-item label="Place" :label-width="formLabelWidth" prop="place">
        <el-input
          name="place"
          v-model="form.place"
          placeholder="Please enter the place"
        />
      </el-form-item>
      <el-form-item
        label="Address"
        :label-width="formLabelWidth"
        prop="address"
      >
        <el-input
          name="address"
          v-model="form.address"
          placeholder="Please enter the address"
        />
      </el-form-item>
      <el-form-item
        label="Average price"
        :label-width="formLabelWidth"
        prop="average_price"
      >
        <el-input
          name="average_price"
          v-model.number="form.average_price"
          placeholder="Please enter the average price"
        />
      </el-form-item>
      <el-form-item
        label="Map link"
        :label-width="formLabelWidth"
        prop="map_link"
      >
        <el-input
          name="map_link"
          v-model="form.map_link"
          placeholder="Please enter the map link"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelNewPlace">Cancel</el-button>
        <el-button type="primary" @click="confirmNewPlace"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import instance from '@/services/api';

const fetchPlaces = inject('fetchPlaces');
const formLabelWidth = '140px';

const placeFormRef = ref();
const dialogFormVisible = ref(false);
const form = reactive({
  place: '',
  address: '',
  average_price: '',
  map_link: '',
});
const rules = reactive({
  place: [
    { required: true, message: 'Please enter the place', trigger: 'change' },
  ],
  address: [
    { required: true, message: 'Please enter the address', trigger: 'change' },
  ],
  average_price: [
    { required: true, message: 'Please enter the average price' },
    { type: 'number', message: 'The average price must be a number' },
  ],
  map_link: [
    { required: true, message: 'Please enter the map link', trigger: 'change' },
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
        await instance.post('add-new-place', {
          name: form.place,
          address: form.address,
          average_price: form.average_price,
          map_link: form.map_link,
        });

        resetForm(formEl);
        fetchPlaces();
      } finally {
        dialogFormVisible.value = false;
      }
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
