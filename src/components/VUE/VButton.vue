<template>
  <button
    class="v-button"
    :class="{ __gradient: gradient, __link: link }"
    @click="$emit('click')"
  >
    <slot/>
    <img v-if="link" :src="`${resourcePath}${link}`">
  </button>
</template>

<script>
export default {
  props: {
    gradient: { type: Boolean, default: false },
    link: { type: String, default: null }
  },
  computed: {
    resourcePath () {
      return this.$root.resourcePath
    }
  }
}
</script>

<style lang="postcss">
.v-button {
  position: relative;
  display: flex;
  justify-content: center;
  outline: none;
  background: transparent;
  color: var(--c-accent);
  align-items: center;
  cursor: pointer;
  padding: 8px 22px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  border: 3px solid var(--c-accent);
  border-radius: 25px;
  &:hover {
    box-shadow: 0px 4px 8px rgba(146, 22, 198, 0.15);
  }
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 22px;
  }
}

.__gradient {
  color: var(--c-white);
  background: linear-gradient(353.97deg, #9216C6 24.97%, #2C96FD 174.18%);
  border: none;
  &:hover {
    background: linear-gradient(353.97deg, #9216C6 24.97%, #B400FF 174.18%);
    box-shadow: 0 4px 8px rgba(146, 22, 198, 0.15);
  }
}

.__link {
  padding: 6px 20px;
  font-size: 16px;
  line-height: 24px;
  & img {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
}

</style>
