<script setup>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';

const props = defineProps(['id']);
const route = useRoute();
const router = useRouter();
console.log(route);

const { post, error, load } = getPost(route.params.id);

load();

const handleClick = async () => {
  await projectFirestore.collection('posts').doc(props.id).delete();

  router.push({ name: 'home' });
};
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="details-view">
    <h3 class="details-view__title">{{ post.title }}</h3>
    <p class="details-view__text">{{ post.body }}</p>
    <button @click="handleClick" class="details-view__delete">
      delete post
    </button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<style lang="scss">
.details-view {
  max-width: 1200px;
  margin: 0 auto;

  &__title {
    display: inline;
    margin-top: 30px;
    position: relative;
    color: var(--white);
    font-size: 20px;
    margin-bottom: 10px;

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
      transform: rotateZ(-1.5deg);
    }
  }

  &__text {
    color: var(--dark-grey);
    line-height: 1.5em;
    margin-top: 4px;
    white-space: pre-wrap;
  }

  &__delete {
    display: block;
    margin-top: 30px;
    background: var(--main-orange);
    color: var(--white);
    border: none;
    padding: 8px 16px;
    font-size: 18px;
  }
}
</style>
