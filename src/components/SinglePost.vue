<script setup>
import { computed } from '@vue/runtime-core';

const props = defineProps(['post']);

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '....';
});
</script>

<template>
  <div class="single-post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3 class="single-post__title">{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<style lang="scss">
.single-post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
  &__title {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: var(--white);
    margin-bottom: 10px;
    max-width: 400px;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: var(--main-orange);
      position: absolute;
      z-index: -1;
      padding-right: 40px;
      left: -30px;
      transform: rotateZ(-1deg);
    }
  }
}
</style>
