<script lang="ts" setup>
import { computed } from 'vue'
import { checkStrength, scorePassword } from '@/logic'

const props = defineProps({
  password: String,
})

const emits = defineEmits(['score'])

const passwordClass: object | null = computed(() => {
  if (!props.password) {
    return null
  }
  const strength = checkStrength(props.password)
  const score = scorePassword(props.password)
  emits('score', { score, strength })
  return {
    [strength]: true,
    scored: true,
  }
})
</script>

<template>
  <div class="po-password-strength-bar" :class="passwordClass" />
</template>

<style>
.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
  width: 10%;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
  width: 32.5%;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
  width: 55%;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
  width: 77.5%;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
  width: 100%;
}
</style>
