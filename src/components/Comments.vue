<template>
    <div class="comments_wrapper">
      <input v-model="comment" placeholder="Write a comment" class="comments_input border" type="text" @keydown.enter="postComment()"/>
      <Comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </div>
  </template>
  
  <script setup>

import Comment from "./Comment.vue";
import { useStore } from "../stores/store";
import { defineProps,ref } from "vue";
  const store = useStore();

  const props = defineProps({
    comments: {
      type: Array,
      required: true,
    },
    postId:{
      required: true,
    }
  });

  const comment = ref("");

  const postComment = () => {
    store.postComment(comment.value, props.postId);
    comment.value = ""; 
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/base.scss';
  .comments_wrapper {
    padding: 0 40px;
    margin-top: 8px;
    border-top: 2px rgba($secondary-color, 0.2) solid;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  
  .comments_input{
    width: 100%;
    min-height: 30px;
    line-height: 30px;

    padding: 6px 14px;
    margin: 30px 0;

    &:focus{
      outline: none;
      border: 2px rgba($active-color, 1) solid;
    }
  }
  
  </style>