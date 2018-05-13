import Vuex from 'vuex'
import axios from 'axios'


const state = {
  loadedPosts: [],
  token: null
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
  },
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get(`${process.env.firebaseUrl}/posts.json`)
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
      .post(`${process.env.firebaseUrl}/posts.json`, addedPost)
      .then(response => {
        commit('addPost', { ...addedPost, id: response.data.name })
      })
      .catch(error => console.log(error))
  },
  editPost({ commit }, editPost) {
    return axios
      .put(`${process.env.firebaseUrl}/posts/${editPost.id}.json`, editPost)
      .then(response => {
        commit('editPost', editPost)
      })
      .catch(error => console.log(error))
  },

  authUser({ commit }, authData) {
    let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.firebaseAPIKey}`
      
    if (!authData.isLogin) {
      authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.firebaseAPIKey}`
    }

    return axios
      .post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(response => {
        commit('setToken', response.data.idToken)
      })
      .catch(error => console.log(error.response.data.error.message))
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