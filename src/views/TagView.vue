<script setup>
import Spinner from '@/components/Spinner.vue';
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';

const route = useRoute();
const { posts, error, load } = getPosts();

load();

const postsWithTag = computed(() => {
  return posts.value.filter(p => p.tags.includes(route.params.tag));
});
</script>

<template>
  <div class="tag-view">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<style>
.tag-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
