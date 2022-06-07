<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="details">
    <h3 class="details__title">{{ post.title }}</h3>
    <p class="details__text">{{ post.body }}</p>
    <button @click="handleClick" class="button details__delete">
      delete post
    </button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    console.log(route);

    const { post, error, load } = getPost(route.params.id);

    load();

    const handleClick = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete();

      router.push({ name: 'home' });
    };

    return { post, error, handleClick };
  },
};
</script>

<style lang="scss">
.details {
  max-width: 1200px;
  margin: 0 auto;

  &__title {
    display: inline;
    margin-top: 30px;
    position: relative;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__title::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }

  &__text {
    color: #444;
    line-height: 1.5em;
    margin-top: 4px;
    white-space: pre-wrap;
  }

  &__delete {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
  }
}
</style>
