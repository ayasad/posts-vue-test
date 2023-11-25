

<template>
  <div class="app">
    <header>
      <Nav/>
    </header>
    <main>
      <Main/>
    </main>
  </div>
  
  
</template>


<script setup>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
</script>

<style  lang="scss" scoped>
@import '../assets/base.scss';
  .app{
    min-height: 100vh;
    background: $primary-color;
  }
</style>
