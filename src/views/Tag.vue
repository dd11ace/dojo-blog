<template>
  <div class="tag">Tag page</div>
</template>

<script>
// challenge
//   - create a tag route, which the tag as a route paramater (/tags/:tag)
//   - is the Tag comp, make a request for all the posts
//   - use a computed property to return an array of posts which have the current tag
//   - use the useRoute function to access the tag route parameter
//   - use the PostList component to output the required posts
//   - show the spinner until the data is loaded, and error if there is one
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts';

export default {};
</script>

<style></style>
