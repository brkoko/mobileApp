<script setup>
import Dropdown from 'primevue/dropdown';
import phonesData from "@/data/phones.json"
import { ref, watch } from "vue";
import {useComparePhone} from '@/stores/counter'
  const comparePhone = useComparePhone();
  const selectedPhone = ref( );
  watch(selectedPhone, (newValue) => {
    comparePhone.changeIdLeft(newValue)
})
console.log(comparePhone.leftCompareId.description)
</script>
<template>
  <div class="left-section">
    <div class="search-bar" >
      <Dropdown v-model="selectedPhone" :options="phonesData" filter optionLabel="name" placeholder="Select phone" class="w-full md:w-14rem">
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex align-items-center">
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="flex align-items-center">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="phone-details" v-show="comparePhone.leftCompareId">
      <img :src="comparePhone.leftCompareId.img" class="image" style="width: 100%; max-width: 200px; height: auto;">
      <div class="phone-specs">
        <h2>{{ comparePhone.leftCompareId.name }}</h2>
        <ul>
          <li><strong>Description:</strong>  {{ comparePhone.leftCompareId.description }} </li>
          <li><strong>Display:</strong>  {{ comparePhone.leftCompareId.display }} </li>
          <li><strong>Resolution:</strong>  {{ comparePhone.leftCompareId.resolution }}</li>
          <li><strong>Size:</strong>  {{ comparePhone.leftCompareId.size }}</li>
          <li><strong>Camera:</strong>  {{ comparePhone.leftCompareId.camera }}</li>
          <li><strong>Battery:</strong>  {{ comparePhone.leftCompareId.battery }}</li>
          <li><strong>Price:</strong>  {{ comparePhone.leftCompareId.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-section {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.phone-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.phone-specs {
  max-width: 300px; /* Adjust as needed */
  text-align: center;
}

.search-bar {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>