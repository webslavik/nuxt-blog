import Vuex from 'vuex'
import axios from 'axios'


const state = {
  loadedPosts: []
}

const getters = {
  loadedPosts: (state) => state.loadedPosts
}

const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editPost) {
    const indexPost = state.loadedPosts.findIndex(post => post.id === editPost.id)
    state.loadedPosts[indexPost] = editPost
  }
}

const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get('https://nuxt-blog-b7aa3.firebaseio.com/posts.json')
      .then(response => {
        const postsArray = []

        for (let key in response.data) {
          postsArray.push({ ...response.data[key], id: key })
        }
        
        commit('setPosts', postsArray)
      })
      .catch(error => console.log(error))

    
  },
  setPosts({ commit }, posts) {
    commit('setPosts', posts)
  },
  addPost({ commit }, post) {
    const addedPost = {
      ...post,
      date: new Date()
    }

    return axios
      .post('https://nuxt-blog-b7aa3.firebaseio.com/posts.json', addedPost)
      .then(response => {
        commit('addPost', { ...addedPost, id: response.data.name })
      })
      .catch(error => console.log(error))
  },
  editPost({ commit }, editPost) {
    return axios
      .put(`https://nuxt-blog-b7aa3.firebaseio.com/posts/${editPost.id}.json`, editPost)
      .then(response => {
        commit('editPost', editPost)
      })
      .catch(error => console.log(error))
  }
}


const createdStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}

export default createdStore