<template>
    <div class="users_wrapper">
      <User v-for="user in store.getUsers" :key="user.id" :user="user"/>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useStore } from "../stores/store";
  import User from "./User.vue";
  
  const store = useStore();
  
  onMounted(() => {
      store.fetchUsers();
  })
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/base.scss';
  .users_wrapper {
    
    margin: 0 30px;
    padding: 20px;
     
    max-width: 1300px;
    width: 1000px;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;

  }
  
  </style>