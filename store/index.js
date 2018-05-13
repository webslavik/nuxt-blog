import Vuex from 'vuex'


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
  setPosts({ commit }, posts) {
    commit('setPosts', posts)
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