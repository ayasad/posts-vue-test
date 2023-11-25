<template>
  <div class="user">
    <div class="user_wrapper">
        <div class="user_avatar">               
            </div>
            <div class="user_info">
                <div class="row">
                    <span>{{ user.username }}</span>
                    <span>EMAIL:{{ user.email }}</span>
                    <span>WEBSITE:{{ user.website }}</span>
                </div>
                <div class="row">
                    <span class="user_info-name">{{user.name }}</span>
                    <span>TEL:{{ user.phone }}</span>
                </div>
               
            </div>
    </div>
            
            <button class="btn" @click="showPostsOfUser">
                Show Posts
            </button>
        </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from '../stores/store';

const store = useStore();

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const showPostsOfUser = () => {
    store.showPostsOfUser(props.user.id, props.user.username)
}
</script>


<style lang="scss" scoped>
@import '../assets/base.scss';

.user{
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        padding: 10px;
        border-top: solid 2px rgba(white,0.2);
        border-bottom: solid 2px rgba(white,0.2);
        border-left: solid 2px rgba(white,0.2);
        border-radius: 20px;
        color: $secondary-color;
        &_wrapper{
            display: flex;
            align-items: center;
            gap: 20px;
        }
       &_avatar{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: white;
        }
       &_info{
            display: flex;
            flex-direction: column;
            gap: 6px;
            span{
                font-size: 16px;
            }

            .row{
                display: flex;
                align-items: center;
                gap: 20px;
            }

            &_info-name{
                font-size: 14px;
                color:$secondary-color;
            }
        }
    
   }
</style>