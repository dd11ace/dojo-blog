<script setup>
import { ref } from '@vue/reactivity';
import { projectFirestore, timestamp } from '@/firebase/config';

// import components
import { useRouter } from 'vue-router';

const title = ref('');
const body = ref('');
const tag = ref('');
const tags = ref([]);

const router = useRouter();

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, ''); // removes all whitespace
    tags.value.push(tag.value);
  }
  tag.value = '';
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp(),
  };

  const res = await projectFirestore.collection('posts').add(post);

  router.push({ name: 'home' });
};
</script>

<template>
  <div class="create-view">
    <form @submit.prevent="handleSubmit">
      <label class="create-view__title">Title:</label>
      <input class="create-view__input" v-model="title" type="text" required />
      <label class="create-view__title">Content</label>
      <textarea
        class="create-view__input create-view__input--textarea"
        v-model="body"
        required
      />
      <label class="create-view__title">Tags (hit enter to add a tag)</label>
      <input
        class="create-view__input"
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeydown"
      />
      <div v-for="tag in tags" :key="tag" class="create-view__tag">
        #{{ tag }}
      </div>
      <button class="create-view__button">Add Post</button>
    </form>
  </div>
</template>

<style lang="scss">
.create-view {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;

  &__input {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;

    &--textarea {
      height: 160px;
    }
  }

  &__title {
    display: inline;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: var(--white);
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

  &__button {
    display: block;
    margin-top: 30px;
    background: var(--main-orange);
    color: var(--white);
    border: none;
    padding: 8px 16px;
    font-size: 18px;
  }

  &__tag {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: var(--dark-grey);
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
}
</style>
