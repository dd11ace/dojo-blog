<template>
  <header class="navbar-header">
    <h1 class="navbar-header__title">The Dojo Blog</h1>
    <nav class="navbar-header__list">
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="navbar-header__item"
          active-class="navbar-header__item--active"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'create' }"
          class="navbar-header__item"
          active-class="navbar-header__item--active"
          >Create Post</router-link
        >
      </li>
    </nav>
  </header>
</template>

<style lang="scss">
.navbar-header {
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

  &__item {
    color: var(--gray);
    text-decoration: none;
    margin-left: 20px;

    &--active {
      color: var(--dark-grey);
      font-weight: bold;
    }
  }
}
</style>
