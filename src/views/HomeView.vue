<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from '../components/PostLIst.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar feugiat placerat. Duis nulla orci, sollicitudin in efficitur vitae, tristique eu felis. Mauris ac tincidunt lectus. Pellentesque vehicula ex non justo tristique, vel rutrum risus convallis. Integer malesuada sodales tellus ut hendrerit. Donec erat mi, ornare quis risus non, feugiat pellentesque eros. Donec eu dolor sed neque hendrerit maximus mattis eu eros. Aliquam mattis, augue eget volutpat commodo, urna quam pharetra tellus, at eleifend elit massa vel magna.',
        id: 1,
      },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 },
    ]);
    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>
