
import { defineStore } from 'pinia'
import { ref , computed} from 'vue'

export const useStore = defineStore('store', () => {
  
  const tab = ref(1)
  const posts = ref([])
  const allPosts = ref([])
  const comments = ref([])
  const users = ref([])
  const filter = ref('')
  const page = ref(1)
  const loading = ref(false)
  const perPage = 20
  const totalPosts = 100
  const nowOnPage = ref(20);

  const setTab = (index) => {
    tab.value = index
  }

  async function fetchPosts() {
    try {
      loading.value = true
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const gotPosts = await response.json();
      allPosts.value = await Promise.all(gotPosts.map(async (post) => {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await userResponse.json();
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const comments = await commentsResponse.json();
        return { ...post, user, comments, active:false };
      }));
      showAllPosts();
      loading.value = false
    } catch (error) {
      console.error(error);
    }
  }

  const changeActivePost = (id) => {  
     Object.values (posts.value).forEach((p) => {
      if (p.id === id) {
        p.active = !p.active;
      }
    });
  }

  const postComment = ( comment,id) => {
    console.log(comment)
    const index = Object.values(posts.value).findIndex((p) => p.id === id)
    posts.value[index].comments = [{email:'You',body:comment},...posts.value[index].comments]
  }

  async function fetchUsers() {
    try {
      loading.value = true
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      users.value ={ ...data};
      loading.value = false
    } catch (error) {
      console.error(error);
    }
  }

  const showPostsOfUser = async (id,username) => {
    console.log(posts.value)
    posts.value = allPosts.value.filter((p) => p.userId === id);
    filter.value = username
    console.log(filter.value)
    tab.value = 1
  }

  const showAllPosts = () => {
    posts.value = {...allPosts.value.slice(0,page.value*perPage)};
    console.log(posts.value)
  }

  const showMorePosts =() => {
    loading.value = true
    page.value +=1;
    posts.value = { ...allPosts.value.slice(0,page.value*perPage) }
    loading.value = false;
    nowOnPage.value+=perPage
  }

  const sortByAlphabet = () => {
    posts.value = Object.values(posts.value).sort((a, b) => {
      const nameA = a.user.username.toUpperCase();
      const nameB = b.user.username.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };


  const getFilter = computed(() => filter.value)
  const getUsers = computed(() => users.value)
  const getPosts = computed(() => posts.value)

  return {tab, setTab, fetchPosts, getPosts, changeActivePost, postComment,fetchUsers,getUsers, showPostsOfUser,showAllPosts,getFilter,filter,
     showMorePosts, loading, totalPosts, nowOnPage, page, sortByAlphabet}
})
