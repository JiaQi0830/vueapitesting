import axios from 'axios'

export default {
  getPosts: ({ commit }) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
  },
  getPost: ({ commit }, id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        commit('SET_POST', response.data)
      })
  },
  deletePost: async ({ commit }, id) => {
    const resp = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (resp.status === 200) {
      commit('DELETE_POST', id)
    }
  },
  updatePost: async ({ commit }, payload) => {
    const resp = await axios.put(`https://jsonplaceholder.typicode.com/posts/${payload.postId}`, payload.form)
    if (resp.status === 200) {
      commit('UPDATE_POST', resp.data)
      return resp.data
    }
  },
  createPost: async ({ commit }, payload) => {
    const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', payload.form)
    if (resp.status === 201) {
      commit('CREATE_POST', resp.data)
      return resp.data
    }
  }
}
