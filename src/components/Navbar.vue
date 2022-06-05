<template>
  <header class="navbar-header">
    <h1 class="navbar-header__title">The Dojo Blog</h1>
    <nav class="navbar-header__list">
      <router-link :to="{ name: 'home' }" class="navbar-header__list-item"
        >Home</router-link
      >
      <router-link :to="{ name: 'Create' }" class="navbar-header__list-item"
        >Create Post</router-link
      >
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

  &__title {
    color: #dfdfdf;
    font-size: 48px;
  }
  &__list-item {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  &__list-item.router-link-active {
    color: #444;
    font-weight: bold;
  }
}
</style>
