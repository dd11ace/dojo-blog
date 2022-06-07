<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: var(--main-orange);
  animation: spinner 1s ease infinite;
}

@keyframes spinner {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
