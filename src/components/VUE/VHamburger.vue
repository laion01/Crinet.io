<template>
  <button
    class="v-hamburger"
    :class="{ __isOpen: isOpen }"
    @click="$emit('click')"
  >
    <span class="v-hamburger_line"></span>
    <span class="v-hamburger_line"></span>
    <span class="v-hamburger_line"></span>
  </button>
</template>

<script>
export default {
  name: 'v-hamburger',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.v-hamburger {
  width: 30px;
  height: 23px;
  margin-right: 20px;
  border: none;
  background: none;
  padding: 0;
  &:focus {
    outline: none;
  }
  @apply relative;
  &.__isOpen {
    & .v-hamburger_line {
      &:first-child {
        transform: translateY(10px) rotate(135deg);
      }
      &:nth-child(2) {
        transform: scale(0);
      }
      &:last-child {
        transform: translateY(-10px) rotate(-135deg);
      }
    }
  }
}

.v-hamburger_line {
  height: 3px;
  background-color: var(--c-accent);
  transition: transform .3s ease-in-out;
  @apply block w-full;
  &:first-child {
    @apply absolute top-0;
  }
  &:last-child {
    @apply absolute bottom-0;
  }
}
</style>
