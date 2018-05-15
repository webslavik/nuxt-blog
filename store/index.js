import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const state = {
  loadedPosts: [],
  token: null
}

const getters = {
  loadedPosts: (state) => state.loadedPosts,
  isAuthenticated: (state) => state.token != null
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
  },
  clearToken(state) {
    state.token = null
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
  addPost({ state, commit }, post) {
    const addedPost = {
      ...post,
      date: new Date()
    }

    return axios
      .post(`${process.env.firebaseUrl}/posts.json?auth=${state.token}`, addedPost)
      .then(response => {
        commit('addPost', { ...addedPost, id: response.data.name })
      })
      .catch(error => console.log(error))
  },
  editPost({ state, commit }, editPost) {
    return axios
      .put(`${process.env.firebaseUrl}/posts/${editPost.id}.json?auth=${state.token}`, editPost)
      .then(response => {
        commit('editPost', editPost)
      })
      .catch(error => console.log(error))
  },

  authUser({ commit, dispatch }, authData) {
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
        console.log(response.data)
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('tokenExpiration', new Date().getTime() + response.data.expiresIn * 1000)

        Cookie.set('jwt', response.data.idToken)
        Cookie.set('expirationDate', new Date().getTime() + response.data.expiresIn * 1000)

        commit('setToken', response.data.idToken)
        dispatch('setLogoutTimer', response.data.expiresIn * 1000)
      })
      .catch(error => console.log(error.response.data.error.message))
  },
  setLogoutTimer({ commit }, duration) {
    setTimeout(() => {
      commit('clearToken')
    }, duration)
  },
  initAuth({ commit, dispatch }, req) {
    let token
    let expirationDate

    if (req) {
      // for Server
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      // for Client
      console.log('for Client')
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
  
      if (new Date().getTime() > +expirationDate || !token) {
        return
      }
    }

    dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
    commit('setToken', token)
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