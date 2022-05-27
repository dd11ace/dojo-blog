<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reacitive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTWO">Update ninja two</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 });
    const ninjaTwo = reactive({ name: 'luigi', age: 35 });

    const nameOne = ref('mario');
    const nameTwo = reactive('luigi'); // can't use primetive values

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTWO = () => {
      ninjaTwo.age = 45;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTWO, nameTwo };
  },
};
</script>
