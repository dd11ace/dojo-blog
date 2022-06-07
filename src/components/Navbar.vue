<script setup>
import { RouterLink } from 'vue-router';

const NAV_ITEMS = [
  { title: 'Home', routeName: 'home' },
  { title: 'Create Post', routeName: 'create' },
];
</script>

<template>
  <header class="navbar">
    <h1 class="navbar__title">The Dojo Blog</h1>
    <nav class="navbar__nav">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="navItem in NAV_ITEMS">
          <RouterLink
            class="navbar__link"
            active-class="navbar__link--active"
            :to="{ name: navItem.routeName }"
          >
            {{ navItem.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

  &__list {
    list-style: none;
    display: flex;
  }

  &__title {
    color: var(--light-gray);
    font-size: 48px;
  }

  &__link {
    color: var(--gray-4);
    text-decoration: none;
    margin-left: 20px;

    &--active {
      color: var(--dark-grey);
      font-weight: bold;
    }
  }
}
</style>
