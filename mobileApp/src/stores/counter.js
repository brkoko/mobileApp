import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useComparePhone = defineStore('compare', () => {
  const leftCompareId = ref(0)
  const rightCompareId = ref(0)

  const changeIdLeft = (id) => {
    leftCompareId.value=id
  }

  const changeIdRight = (id) => {
    rightCompareId.value=id
  }
  return { rightCompareId, leftCompareId, changeIdLeft, changeIdRight}
})