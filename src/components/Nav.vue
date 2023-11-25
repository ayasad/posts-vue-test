<template>
    <nav class="nav border font">
        <span class="nav_logo">POSTS-APP</span>
        <div class="nav_tabs">
            <button class="nav_tabs-item font "  @click="store.setTab(1)">
                <span :class="{active:store.tab===1}">Posts</span>
            </button>
            <button class="nav_tabs-item font"  @click="store.setTab(2)">
                <span :class="{active:store.tab===2}">Users</span>
            </button>

        </div>
      </nav>
</template>

<script setup>
    import {useStore} from '../stores/store'
    const store = useStore()
</script>

<style  lang="scss" scoped>
  @import '../assets/base.scss';
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    

   &_logo {
    color: $active-color;
    margin: 10px;
   }

   &_tabs {
    display: flex;
    gap:50px;
    margin-right: 50px;

    .nav_tabs-item{
        
        background: none;
        border: none;
        color: $secondary-color;
        
        &:hover{
            color: $active-color;
            cursor: pointer;
        }

        
    }
    
   }
}

.active{
            color: $active-color;
        }


</style>