<script setup>
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';

const { posts, error, load } = getPosts();

load();
</script>
<template>
  <div class="home-view">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="home-view__content">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<style lang="scss">
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

  &__content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
}
</style>
