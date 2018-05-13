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