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
  nuxtServerInit({ commit }, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setPosts', [
          {
            id: '1',
            title: 'Post title 1',
            content: 'Post content 1 ...',
            thumbnailPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ'
          },
          {
            id: '2',
            title: 'Post title 2',
            content: 'Post content 2 ...',
            thumbnailPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ'
          },
          {
            id: '3',
            title: 'Captain Marvel',
            content: 'Awesome movie',
            thumbnailPath: 'https://cdn.movieweb.com/img.news.tops/NEgVt9kYZKSckl_2_b/Captain-Marvel-Writer-Geneva-Robertson-Dworet.jpg'
          },
        ])
      }, 1000)
      resolve()
    })
  },
  setPosts({ commit }, posts) {
    console.log(posts);
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