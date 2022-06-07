<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  display: block;
  margin-top: 30px;
  background: var(--main-orange);
  color: var(--white);
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
</style>
