<template>
  <transition :name="`modal-fade-${direction}`">
    <div class="modal" @click.self="closeModal">
      <div class="modal_wrapper" ref="wrapper">
        <div class="modal-close" @click="closeModal"></div>
        <div class="modal_inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    direction: { type: String, default: 'bottom' },
    success: { type: Boolean, default: false }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="postcss">
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
  text-align: center;
}
.modal_wrapper {
  max-width: 90%;
  opacity: 1;
  position: relative;
  transition-property: transform, opacity;
  transition-duration: 0.4s;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
.modal-close {
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #93959B;
  transition: all 0.5s ease-in-out;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 8px;
    height: 2px;
    top: 7px;
    left: 4px;
    transition: all 0.5s ease-in-out;
    background-color: #93959B;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
.modal_inner {
  overflow: hidden;
}
</style>
