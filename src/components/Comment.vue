<template>
  <div class="comment">
    <div class="comment_title">
        <span>{{ comment.email }}</span>
    </div>
    <div class="comment_content">
        <div>{{ comment.body }}</div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>

@import '../assets/base.scss';
.comment {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: $primary-color;
 .comment_title {
    font-size: 16px;
    font-weight: 700;
    color: $main;
    margin-bottom: 10px;
  }
 .comment_content {
    font-size: 14px;
    color: $comment-color;
    word-wrap: break-word;
  }
}
</style>