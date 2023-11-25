<template>
    <div class="main">
        <Posts :class="{hidden:store.tab===2}"/>
        <Users :class="{hidden:store.tab===1}"/>
    </div>
</template>

<script setup>
import Posts from './Posts.vue';
import Users from './Users.vue';
import { useStore } from '../stores/store';

const store = useStore();



</script>

<style lang="scss" scoped>
   .main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hidden {
        display: none;
    }
</style>