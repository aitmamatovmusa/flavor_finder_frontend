<template>
  <el-button text @click="dialogFormVisible = true" type="primary"
    >Add a new place</el-button
  >
  <el-dialog v-model="dialogFormVisible" title="Place">
    <el-form ref="placeFormRef" :model="form" method="post" :rules="rules">
      <el-form-item label="Place" :label-width="formLabelWidth" prop="place">
        <el-input
          name="place"
          v-model="form.place"
          placeholder="Please write a place"
        />
      </el-form-item>
      <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
        <el-input
          name="address"
          v-model="form.address"
          placeholder="Please select an address"
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
import { ref, reactive } from 'vue';
import instance from '@/services/api';

const formLabelWidth = '140px';

const placeFormRef = ref();
const dialogFormVisible = ref(false);
const form = reactive({
  place: '',
  address: '',
});
const rules = reactive({
  place: [
    { required: true, message: 'Please select a place', trigger: 'change' },
  ],
  address: [
    { required: true, message: 'Please select an address', trigger: 'change' },
  ],
});

async function submitForm(formEl) {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        await instance.post('add-new-place', {
          name: form.place,
          address: form.address,
        });
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
