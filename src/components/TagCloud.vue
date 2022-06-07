<script>
import useTags from '../composables/useTags';

export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts);

    return { tags };
  },
};
</script>

<template>
  <div class="tag-cloud">
    <h3 class="tag-cloud__title">Tags</h3>
    <div v-for="tag in tags" :key="tag" class="tag-cloud__list">
      <router-link
        :to="{ name: 'Tag', params: { tag } }"
        class="tag-cloud__list-item"
      >
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.tag-cloud {
  padding: 10px;
  &__title {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }

  &__list {
    display: inline-block;
    padding: 10px;
  }

  &__list-item {
    color: #ccc;
    text-decoration: none;
    &.router-link-active {
      color: #ff8800;
      font-weight: bold;
    }
  }
}
</style>
