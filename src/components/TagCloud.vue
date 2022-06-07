<script setup>
import useTags from '../composables/useTags';

const props = defineProps(['posts']);

const { tags } = useTags(props.posts);
</script>

<template>
  <div class="tag-cloud">
    <h3 class="tag-cloud__title">Tags</h3>
    <div v-for="tag in tags" :key="tag" class="tag-cloud__list">
      <router-link
        :to="{ name: 'tag', params: { tag } }"
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
    color: var(--dark-grey);
  }

  &__list {
    display: inline-block;
    padding: 10px;
  }

  &__list-item {
    color: var(--light-gray);
    text-decoration: none;
    &.router-link-active {
      color: var(--main-orange);
      font-weight: bold;
    }
  }
}
</style>
