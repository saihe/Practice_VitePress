<script setup lang="ts">
import { ref } from 'vue'
import { dateFormatToDispay, yearMonthFormatToDisplay } from '../../utilities/dateTime'

const props = withDefaults(defineProps<{
  initialValue: string,
  viewMode: 'months' | 'year',
  hideIcon: boolean,
}>(), {
  initialValue: new Date().toLocaleDateString(),
  viewMode: 'year',
  hideIcon: false,
})
const isOpen = ref(false)
const date = defineModel<Date>({default: new Date()})
if (!!props.initialValue) {
  date.value = new Date(props.initialValue)
}

</script>

<template width="100px">
  <v-menu :model-value="isOpen" offset-y full-width :close-on-content-click="false">
    <v-date-picker
      no-title
      :value="props.initialValue"
      v-model="date"
      :viewMode="props.viewMode"
      @update:month="(monthIndex) => {
        date = new Date(date.getFullYear(), monthIndex, date.getDate())
        isOpen = false
      }"
      @update:modelValue="() => isOpen = false"
    />
  </v-menu>
  <v-text-field
    readonly
    :prepend-icon="props.hideIcon ? '' : 'mdi-calendar'"
    variant="filled"
    :value="props.viewMode === 'year' ? dateFormatToDispay(date) : yearMonthFormatToDisplay(date)"
    @click="() => isOpen = true"
    hide-details
    density="compact"
  />
</template>
