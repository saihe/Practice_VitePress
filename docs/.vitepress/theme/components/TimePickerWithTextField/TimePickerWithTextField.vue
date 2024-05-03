<script setup lang="ts">
import { ref } from 'vue'
import { timeFormatToDispay, setTime } from '../../utilities/dateTime'
import Button from '../Button'

const props = withDefaults(defineProps<{
  initialValue: string,
  hideIcon: boolean,
}>(), {
  initialValue: new Date().toLocaleTimeString(),
  hideIcon: false,
})
const isOpen = ref(false)
const date = defineModel<Date>({default: null})
if (!!props.initialValue) {
  date.value = setTime(new Date(), props.initialValue)
}

const hours = ref(!props.initialValue ? '' : timeFormatToDispay(date.value).substring(0, 2))
const minutes = ref(!props.initialValue ? '' : timeFormatToDispay(date.value).substring(3, 5))
const seconds = ref(!props.initialValue ? '00' : timeFormatToDispay(date.value).substring(6, 8))
const clearValues = () => {
  hours.value = ''
  minutes.value = ''
  isOpen.value = false
}

</script>

<template>
  <v-menu
    v-model="isOpen"
    offset-y
    activator="parent"
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <v-row>
      <v-time-picker
        format="24hr"
        :value="props.initialValue"
        v-model="date"
        hide-header
        scrollable
        @update:hour="(value) => {
          hours = `00${value}`.slice(-2)
        }"
        @update:minute="(value) => {
          minutes = `00${value}`.slice(-2)
          isOpen = false
        }"
      />
    </v-row>
    <v-row>
      <Button text="クリア" :onClick="() => clearValues()"></Button>
    </v-row>
  </v-menu>
  <v-text-field
    readonly
    variant="filled"
    :value="!hours || !minutes || !seconds ? null : `${hours}:${minutes}:${seconds}`"
    :prepend-icon="props.hideIcon ? '' : 'mdi-clock-time-four-outline'"
    hide-details
    density="compact"
  >
  </v-text-field>
</template>
