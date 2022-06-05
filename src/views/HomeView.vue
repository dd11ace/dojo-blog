<template>
  <div class="homeview">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="homeview__content">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';

const { posts, error, load } = getPosts();

load();
</script>

<style lang="scss">
.homeview {
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
