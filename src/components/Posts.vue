<template>
  <div class="posts_wrapper">
    <div v-if="store.loading" class="loading-indicator">
      <div class="spinner"></div>
    </div>
    <div v-if="store.filter!='' " class="filterByUser" >
      <h1>Posts of user : {{ store.filter }}</h1>
      <button class="close-button" @click="noFilter"></button>
    </div>
    <div class="filters">
      <button @click="store.showAllPosts" class="btn">Все</button>
      <button @click="store.sortByAlphabet" class="btn">Сортировать по алфавиту</button>     
    </div>
   
    <Post v-for="post in store.getPosts" :key="post.id" :post="post"/>
    
  </div>
  
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "../stores/store";
import Post from "./Post.vue";

const store = useStore();



onMounted(() => {
    store.fetchPosts();
    store.showAllPosts();
    window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

const noFilter = () => {
  store.showAllPosts();
  store.filter = "";
}

const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight && !store.loading && store.nowOnPage < store.totalPosts && store.filter =='') {
        store.showMorePosts();
      }
    }
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';

.btn{
  width: 200px;
  margin-bottom: 20px;
}
.posts_wrapper {
  
  margin: 0 30px;
  padding: 20px;
  border-left: 2px rgba($secondary-color, 0.2) solid;
  border-right: 2px rgba($secondary-color, 0.2) solid;
   
  max-width: 1000px;
  width: 700px;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;

  .filterByUser{
    display: flex;
    align-items: center;
    gap:10px;
    color:$main;
    padding: 10px;
    margin-bottom: 10px;

    .close-button {
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 14px;
        height: 2px;
        background-color: $active-color;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
}
  }

  .loading-indicator {
    text-align: center;
    padding: 20px;
  }
  .spinner {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid $active-color;
    border-top-color: $primary-color;
    animation: spin 1s infinite ease-in-out;
    margin-bottom: 10px;
  }

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
}

</style>