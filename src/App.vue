<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue'
export default {
  components: {
    AppHeader,
    CardList,
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template lang="">
  <main>
    <AppHeader />
    <CardList />
  </main>
</template>
<style lang="scss">
@use './styles/generals.scss';

main{
  background-color: rgb(212, 143, 56);
}
</style>