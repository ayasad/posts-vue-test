<template>
    <div class="post border" style="" :class="{activeShadow:post.active}" >
        <div class="post_user">
            <div class="post_user-avatar">               
            </div>
            <div class="post_user-info">
                <span>{{ post.user.username }}</span>
                <span class="post_user-info-name">{{ post.user.name }}</span>
            </div>
        </div>
        <div class="post_content">
            <div class="post_content-title">
                <span>{{post.title}}</span>
            </div>
            <div class="post_content-body">
                <span>{{ post.body }}</span>
            </div>
        </div>
        <div class="post_btns">
            <button class="btn" :class="{activeBackground:post.active,activeShadow:post.active}" @click="showComments(post.id)">
                <span>Comments</span>
            </button>
        </div>
        <div class="post_comments" v-if="post.active">
            <Comments :comments="post.comments" :postId="post.id"/>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from '../stores/store'
import Comments from './Comments.vue'

const store = useStore();

const props = defineProps({
    post: Object,
})

const showComments = (id) => {
    store.changeActivePost(id);
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';

.post{
    padding: 10px;
    margin-bottom: 30px;
    box-shadow: 0 0 10px 0px $secondary-color;
    color: $main;
    max-width: 100%;

    
    &_user{
        display: flex;
        gap:10px;
        align-items: center;
        margin: 5px 0;
        padding-bottom: 8px;
       &_user-avatar{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: $main;
        }
       &_user-info{
            display: flex;
            flex-direction: column;
            gap: 2px;
            span{
                font-size: 16px;
            }

            &_user-info-name{
                font-size: 14px;
                color:$secondary-color;
            }
        }
   }
  .post_content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        padding: 10px;
        border-top: solid 2px rgba($main,0.2);
        border-bottom: solid 2px rgba($main,0.2);
       &_content-title{
            font-size: 22px;
            font-weight: bold;
        }
      &_content-body{
            font-size: 18px;
            line-height: 1.5;
        }

    }

    .post_btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 10px 10px 0px 10px;

        
    }

}
</style>