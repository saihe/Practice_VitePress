<script setup lang="ts">

const props = withDefaults(defineProps<{
  color?: 'primary' | 'secondary',
  text: string,
  onClick: () => void,
}>(), {
  color: 'primary',
  text: 'submit',
  onClick: () => {},
})
</script>

<template>
  <v-btn
    :color="props.color"
    @click="() => props.onClick()"
  >{{ props.text }}</v-btn>
</template>